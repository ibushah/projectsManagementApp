import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdatasetcomponentComponent } from './newdatasetcomponent.component';

describe('NewdatasetcomponentComponent', () => {
  let component: NewdatasetcomponentComponent;
  let fixture: ComponentFixture<NewdatasetcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdatasetcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdatasetcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
