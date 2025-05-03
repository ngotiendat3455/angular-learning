import { computed, inject, Injectable, Signal } from '@angular/core';
import { TestCatergoryService } from './test-catergory.service';
import { TestStateService } from './test-state.service';
import { catchError, EMPTY, finalize, map, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { QuizCategoryModel } from '../../quiz-category.service';
import { QuizConfigModel } from '../models/quia-config.model';
import { TestQuizQuestionService } from './test-quiz-question.service';
import { ApiQuestionModel } from '../models/api-question.model';
import { QuizLineModel } from '../models/quiz-line.model';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../app.routes';
import { QuizDifficultyModel } from '../models/quiz-difficulty.model';

@Injectable({
  providedIn: 'root'
})
export class TestQuizMarkService {
  readonly #categoryService = inject(TestCatergoryService);
  readonly #stateService = inject(TestStateService);
  readonly #quizQuestionService = inject(TestQuizQuestionService);
  readonly #router = inject(Router);

  getCategoryModal(): Signal<QuizCategoryModel[]>  {
    return this.#stateService.get('quizCategory') as Signal<QuizCategoryModel[]>;
  }
  getCategoryLoading(){
    return this.#stateService.get('loadingCategorgy') as Signal<boolean>;
  }

  initializeQuizCategories(){
    this.#stateService.set('loadingCategorgy', true);

    this.#categoryService.getQuizCatory().pipe(
      tap((dataResponse) => {
        this.#stateService.set('quizCategory', dataResponse);
      }),
      catchError((error: HttpErrorResponse) => {
        return this.#handleQuizError(error);
      })
    )
  }

  selectCategory(category: string | null) {
    this.#stateService.set('selectedQuizCategory', category);
  }

  #handleQuizError(error: HttpErrorResponse) {
    console.log('error', error);
    return EMPTY;
  }

  getSelectedQuizCategory() {
    return this.#stateService.get('selectedQuizCategory');
  }

  getQuizSubcategories(): Signal<string[]> {
    return computed(() => {
      const categorySignal = this.getCategoryModal();
      const categories = categorySignal();
      const selectCategorySignal = this.getSelectedQuizCategory();
      const selectedCategory = selectCategorySignal();
      
      if (categories.length == 0) return [];

      const target = categories.filter((ele) => ele.name == selectedCategory).map((ele) => ele.subcategory!);

      return [...new Set(target)]
    })
  }

  #getQuizCategory(quizConfigModel: QuizConfigModel | null): QuizCategoryModel {
    const categorySingal = this.getCategoryModal();
    const category = categorySingal();

    const found = category.find((ele) => {
      const isSameCategory = ele.name === quizConfigModel?.category;

      if (quizConfigModel?.subcategory) {
        const isSameSubcategory = ele?.subcategory === quizConfigModel.subcategory;
        return isSameCategory && isSameSubcategory
      }
      return isSameCategory;
    });
    if(!found) {
      throw new Error(`Quiz category '${quizConfigModel?.category}' doesn't exist`);
    }
    return found;
  }
  #shuffleAnswers(answers: string[]): string[] {
    return answers
      .map(answer => ({ value: answer, sortValue: Math.random()}))
      .sort((answer1, answer2) => answer1.sortValue - answer2.sortValue)
      .map(({value}) => value);
  }

  #mappingDataFromAPIToQuestion(apiQuestion: ApiQuestionModel): QuizLineModel{
    return ({
      question: apiQuestion.question,
      answers: this.#shuffleAnswers([
        ...apiQuestion.incorrect_answers,
        apiQuestion.correct_answer
      ]),
      correctAnswer: apiQuestion.correct_answer,
      userAnswer: null,
    })
  }
  createQuizLines(quizConfigModel: QuizConfigModel | null) {
    if (!quizConfigModel) {
      return of([]);
    }

    this.#stateService.set('areQuizLinesLoading', true);
    const category = this.#getQuizCategory(quizConfigModel);
    return this.#quizQuestionService.getApiQuestion(category.id, quizConfigModel.difficulty!)
      .pipe(
        map(respone => {
          const quizLines = respone.map((ele) => this.#mappingDataFromAPIToQuestion(ele));
          this.#stateService.set('quizLines', quizLines);
          this.#router.navigate([`/${ROUTE_PATHS.QUIZ}`])
          return quizLines;
        }),
        catchError((err: HttpErrorResponse) => {
          return this.#handleQuizError(err);
        }),
        finalize(() => {
          this.#stateService.set('areQuizLinesLoading', false);
        })
      )
  }

  getQuizDifficulties():Signal<QuizDifficultyModel[]> {
    return this.#stateService.get('quizDifficulties') as Signal<QuizDifficultyModel[]>;
  };

  
}
