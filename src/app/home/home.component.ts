import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  // readonly #quizMakerService = inject(QuizMakerService);

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

}
