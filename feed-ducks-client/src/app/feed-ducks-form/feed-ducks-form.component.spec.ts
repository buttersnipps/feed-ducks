import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDucksFormComponent } from './feed-ducks-form.component';

describe('FeedDucksFormComponent', () => {
  let component: FeedDucksFormComponent;
  let fixture: ComponentFixture<FeedDucksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedDucksFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDucksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
