import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDucksDataComponent } from './feed-ducks-data.component';

describe('FeedDucksDataComponent', () => {
  let component: FeedDucksDataComponent;
  let fixture: ComponentFixture<FeedDucksDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedDucksDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDucksDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
