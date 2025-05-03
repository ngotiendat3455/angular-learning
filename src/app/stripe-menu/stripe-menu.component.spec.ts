import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeMenuComponent } from './stripe-menu.component';

describe('StripeMenuComponent', () => {
  let component: StripeMenuComponent;
  let fixture: ComponentFixture<StripeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripeMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StripeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
