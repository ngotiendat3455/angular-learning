import { inject, Injectable, Signal } from '@angular/core';
import { QuizCategoryModel, QuizCategoryService } from './quiz-category.service';
import { catchError, EMPTY, finalize, Observable, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { QuizMakerStateService } from './quiz-maker-state.service';

@Injectable({
  providedIn: 'root'
})
export class QuizMarkerService {
  constructor() { }
  readonly #categoryService = inject(QuizCategoryService);
  readonly #stateService = inject(QuizMakerStateService);

  getQuizCategories(): Signal<QuizCategoryModel[]> {
    return this.#stateService.get('quizCategories') as Signal<QuizCategoryModel[]>;
  }
  areQuizCategoriesLoading(): Signal<boolean> {
    return this.#stateService.get('areQuizCategoriesLoading') as Signal<boolean>;
  }

    /**
   * Initialize the quiz categories
   * @returns the quiz categories
   */
    initializeQuizCategories(): Observable<QuizCategoryModel[]> {
      const quizCategories = this.getQuizCategories();
      if(quizCategories().length > 0) {
        return of(quizCategories());
      }
  
      // Start categories loading
      this.#stateService.set('areQuizCategoriesLoading', true);
  
      return this.#categoryService.getQuizCategories()
      .pipe(
        // Initialize quiz categories
        tap(categories => {
          this.#stateService.set('quizCategories', categories);
        }),
        // Handle error while retrieving categories
        catchError((error: HttpErrorResponse) => 
          this.#handleQuizError('Error retrieving categories', error)
        ),
        // Stop categories loading even if an error occurs
        finalize(() => {
          this.#stateService.set('areQuizCategoriesLoading', false);
        })
      );
    }
    
    #handleQuizError(explicitErrorMessage: string, error: HttpErrorResponse): Observable<never> {
      // Update quiz maker ko indicator
      // this.#stateService.set('isQuizMakerKo', true);
      
      // Log error in the browser console
      console.error(explicitErrorMessage, error);
  
      // return an empty Observable to stop the stream
      return EMPTY;
    }
  
}
