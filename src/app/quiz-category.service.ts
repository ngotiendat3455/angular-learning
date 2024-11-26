import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { ApiCategoryResponseModel } from '../models/api-category.model';
// import { QuizCategoryModel } from '../models/quiz-category.model';

/** Category model from the Open Trivia Database API */
export interface ApiCategoryModel {
  id: number;
  name: string;
}

/** Category response model from the Open Trivia Database API*/
export interface ApiCategoryResponseModel {
  trivia_categories: ApiCategoryModel[]
}

/** Quiz category model */
export interface QuizCategoryModel {
  id: number;
  name: string;
  subcategory: string | null;
}
/** Service used to get categories from the Open Trivia Database API */
@Injectable({
  providedIn: 'root'
})
export class QuizCategoryService {

  readonly #http = inject(HttpClient);

  /**
   * Get quiz categories
   * @returns the quiz categories
   */
  getQuizCategories(): Observable<QuizCategoryModel[]> {
    return this.#http.get<ApiCategoryResponseModel>('https://opentdb.com/api_category.php')
    .pipe(
      map(apiQuizCategoryResponse =>
        apiQuizCategoryResponse.trivia_categories.map(category => {
          // Separator used to identify categories that need formatting
          const separator = ': ';

          // If category name contains separator, split to get name and subcategory
          if(category.name.includes(separator)) {
            return {
              id: category.id,
              name: category.name.split(separator)[0],
              subcategory: category.name.split(separator)[1]
            }
          }

          // Else use category name and no subcategory
          return {
            id: category.id,
            name: category.name,
            subcategory: null,
          };
        })
      )
    );
  }
}