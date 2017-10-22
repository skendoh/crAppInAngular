import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDecksComponent } from './make-decks.component';

describe('MakeDecksComponent', () => {
  let component: MakeDecksComponent;
  let fixture: ComponentFixture<MakeDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
