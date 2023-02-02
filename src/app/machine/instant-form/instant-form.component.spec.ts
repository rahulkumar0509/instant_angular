import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantFormComponent } from './instant-form.component';

describe('InstantFormComponent', () => {
  let component: InstantFormComponent;
  let fixture: ComponentFixture<InstantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
