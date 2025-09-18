import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipyComponent } from './all-recipy.component';

describe('AllRecipyComponent', () => {
  let component: AllRecipyComponent;
  let fixture: ComponentFixture<AllRecipyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRecipyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecipyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
