import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodArticleComponent } from './food-article.component';

describe('FoodArticleComponent', () => {
  let component: FoodArticleComponent;
  let fixture: ComponentFixture<FoodArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
