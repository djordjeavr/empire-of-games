import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGiftComponent } from './card-gift.component';

describe('CardGiftComponent', () => {
  let component: CardGiftComponent;
  let fixture: ComponentFixture<CardGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});