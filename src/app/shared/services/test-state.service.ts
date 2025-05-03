import { computed, Injectable, Signal, signal } from '@angular/core';
import { QuizCategoryModel } from '../../quiz-category.service';
import { QuizDifficultyModel } from '../models/quiz-difficulty.model';
import { QuizLineModel } from '../models/quiz-line.model';

export type QuizState = {
  loadingCategorgy: boolean,
  quizCategory: QuizCategoryModel[],
  selectedQuizCategory: string | null,
  quizDifficulties: QuizDifficultyModel[],
  areQuizLinesLoading: boolean,
  quizLines: QuizLineModel[]
}

export type QuizAttribute = keyof QuizState;

@Injectable({
  providedIn: 'root'
})
export class TestStateService {

  readonly INITIAL_STATE: QuizState = {
    loadingCategorgy: false,
    quizCategory: [],
    selectedQuizCategory: null,
    areQuizLinesLoading: false,
    quizDifficulties: [
      { label: 'Easy', value: 'easy' },
      { label: 'Medium', value: 'medium' },
      { label: 'Hard', value: 'hard' },
    ],
    quizLines: []
  }

  #state = signal<QuizState>({...this.INITIAL_STATE});

  set(attr: QuizAttribute, newValue: QuizState[QuizAttribute]) {
    const curr = this.#state()[attr];

    if (curr !== newValue) {
      this.#state.update((state) => ({...state, [attr]: newValue}));
    };
  }

  get(attr: QuizAttribute): Signal<QuizState[QuizAttribute]> {
    return computed(() => this.#state()[attr])
  }
}
