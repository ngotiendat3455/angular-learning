import { Component, computed, inject } from '@angular/core';
import { TestQuizMarkService } from '../../shared/services/test-quiz-mark.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { QuizAutocompleteComponent } from '../../quiz-autocomplete/quiz-autocomplete.component';
import { QuizConfigModel } from '../../shared/models/quia-config.model';
import { QuizDifficultyModel } from '../../shared/models/quiz-difficulty.model';
import { QuizSelectComponent } from '../../quiz-select/quiz-select.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    QuizAutocompleteComponent,
    QuizSelectComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly #quizMarkerService = inject(TestQuizMarkService);
  readonly CATEGORY_FIELD = 'category';
  readonly SUBCATEGORY_FIELD = 'subcategory';
  readonly DIFFICULTY_FIELD = 'difficulty';

  supscription = new Subscription();

  constructor() {
    // super(props);
    this.#initializeDropdowns();
  }
  areQuizCategoriesLoading = this.#quizMarkerService.getCategoryLoading();
  form = new FormGroup({
    [this.CATEGORY_FIELD]: new FormControl<string | null>(null),
    [this.SUBCATEGORY_FIELD]: new FormControl<string | null>(null),
    [this.DIFFICULTY_FIELD]: new FormControl<string | null>(null)
  })

  quizCategories = computed(() => {
    const categories = this.#quizMarkerService.getCategoryModal();
    return [...new Set(categories().map((ele) => ele.name))]
  })

  quizSubcategories = this.#quizMarkerService.getQuizSubcategories();
  quizDifficulties = this.#quizMarkerService.getQuizDifficulties();

  get categoryControl(): FormControl<string | null> {
    return this.form.controls[this.CATEGORY_FIELD];
  }

  get subcategoryControl(): FormControl<string | null> {
    return this.form.controls[this.SUBCATEGORY_FIELD];
  }

  get difficultyControl(): FormControl<string | null> {
    return this.form.controls[this.DIFFICULTY_FIELD];
  }
  
  formatQuizDifficultyFn = (quizDifficultieModel: QuizDifficultyModel) => quizDifficultieModel.label || null;
  
  onSubmit(){
    const model = {
      category: this.categoryControl.value,
      difficulty: this.difficultyControl.value,
      subcategory: this.subcategoryControl.value
    } as QuizConfigModel;

    this.#quizMarkerService.createQuizLines(model);
  }
  #initializeDropdowns(){
    this.supscription.add(
      this.#quizMarkerService.initializeQuizCategories()
    )
  }

  ngOnDestroy(){
    this.supscription.unsubscribe();
  }
}
