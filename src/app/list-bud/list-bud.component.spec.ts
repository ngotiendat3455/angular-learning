import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBudComponent } from './list-bud.component';

describe('ListBudComponent', () => {
  let component: ListBudComponent;
  let fixture: ComponentFixture<ListBudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
