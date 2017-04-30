/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DifferComponent } from './differ.component';

describe('DifferComponent', () => {
  let component: DifferComponent;
  let fixture: ComponentFixture<DifferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
