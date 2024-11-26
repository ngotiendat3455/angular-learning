import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAutocompleteComponent } from './quiz-autocomplete.component';

describe('QuizAutocompleteComponent', () => {
  let component: QuizAutocompleteComponent;
  let fixture: ComponentFixture<QuizAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
