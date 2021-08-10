import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordersComponent } from './worders.component';

describe('WordersComponent', () => {
  let component: WordersComponent;
  let fixture: ComponentFixture<WordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
