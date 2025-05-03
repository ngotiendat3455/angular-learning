import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToursComponent } from './app-tours.component';

describe('AppToursComponent', () => {
  let component: AppToursComponent;
  let fixture: ComponentFixture<AppToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppToursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
