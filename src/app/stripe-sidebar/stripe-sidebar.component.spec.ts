import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeSidebarComponent } from './stripe-sidebar.component';

describe('StripeSidebarComponent', () => {
  let component: StripeSidebarComponent;
  let fixture: ComponentFixture<StripeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripeSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StripeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
