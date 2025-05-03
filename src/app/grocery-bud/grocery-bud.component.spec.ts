import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryBudComponent } from './grocery-bud.component';

describe('GroceryBudComponent', () => {
  let component: GroceryBudComponent;
  let fixture: ComponentFixture<GroceryBudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryBudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryBudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
