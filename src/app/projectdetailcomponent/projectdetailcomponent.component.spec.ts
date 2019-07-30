import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailcomponentComponent } from './projectdetailcomponent.component';

describe('ProjectdetailcomponentComponent', () => {
  let component: ProjectdetailcomponentComponent;
  let fixture: ComponentFixture<ProjectdetailcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
