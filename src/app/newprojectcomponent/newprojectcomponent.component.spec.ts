import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectcomponentComponent } from './newprojectcomponent.component';

describe('NewprojectcomponentComponent', () => {
  let component: NewprojectcomponentComponent;
  let fixture: ComponentFixture<NewprojectcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewprojectcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
