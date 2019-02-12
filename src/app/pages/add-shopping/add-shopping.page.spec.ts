import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingPage } from './add-shopping.page';

describe('AddShoppingPage', () => {
  let component: AddShoppingPage;
  let fixture: ComponentFixture<AddShoppingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
