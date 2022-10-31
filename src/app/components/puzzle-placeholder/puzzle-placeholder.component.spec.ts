import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzlePlaceholderComponent } from './puzzle-placeholder.component';

describe('PuzzlePlaceholderComponent', () => {
  let component: PuzzlePlaceholderComponent;
  let fixture: ComponentFixture<PuzzlePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzlePlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzlePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
