import { computed, Injectable, Signal, signal } from '@angular/core';
import { QuizCategoryModel } from './quiz-category.service';


export type QuizMakerState = {
  areQuizCategoriesLoading: boolean,
  quizCategories: QuizCategoryModel[],

};


export type QuizMakerStatAttribute = keyof QuizMakerState;
@Injectable({
  providedIn: 'root'
})
export class QuizMakerStateService {
  constructor() { }

  readonly INITIAL_STATE: QuizMakerState = {
    areQuizCategoriesLoading: false,
    quizCategories: [],
  };

  #state = signal<QuizMakerState>({...this.INITIAL_STATE});

  set(attribute: QuizMakerStatAttribute, newValue: QuizMakerState[QuizMakerStatAttribute]) {
    const actualValue = this.#state()[attribute];

    if(actualValue !== newValue) {
      this.#state.update((state) => ({...state, [attribute]: newValue}));
    }
  }

  get(attribute: QuizMakerStatAttribute): Signal<QuizMakerState[QuizMakerStatAttribute]> {
    return computed(() => this.#state()[attribute]);
  }
}
