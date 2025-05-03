import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiQuestionModel, ApiQuestionResponseModel } from '../models/api-question.model';

@Injectable({
  providedIn: 'root'
})
export class TestQuizQuestionService {

  readonly #http = inject(HttpClient);

  getApiQuestion(categoryId: number, difficultyValue: string, numberOfQuestions = 5) : Observable<ApiQuestionModel[]> {
    return this.#http.get<ApiQuestionResponseModel>(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryId}&difficulty=${difficultyValue}&type=multiple`
    ).pipe(
      map(apiQuizResponse => apiQuizResponse.results)
    )
  }
}
