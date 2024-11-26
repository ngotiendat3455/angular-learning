import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { QuizMarkerService } from '../quiz-marker.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  readonly CATEGORY_FIELD = 'category';
  readonly SUBCATEGORY_FIELD = 'subcategory';
  readonly DIFFICULTY_FIELD = 'difficulty';

  readonly #quizMakerService = inject(QuizMarkerService);

  /** Quiz form */
  form = new FormGroup({
    [this.CATEGORY_FIELD]: new FormControl<string | null>(null, Validators.required),
    [this.SUBCATEGORY_FIELD]: new FormControl<string | null>(null),
    // [this.DIFFICULTY_FIELD]: new FormControl<QuizDifficultyModel | null>(null, Validators.required)
  });

    /** Quiz subcategories */
    quizSubcategories = [];

     /** Quiz categories loading indicator */
  areQuizCategoriesLoading = false;


  subscription = new Subscription();

  constructor() {
    // Initialize dropdowns
    this.#initializeDropdowns();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  #initializeDropdowns() {
    this.subscription.add(
      this.#quizMakerService.initializeQuizCategories().subscribe()
    );
  }
}
