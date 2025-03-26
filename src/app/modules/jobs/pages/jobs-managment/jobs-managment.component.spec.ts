import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsManagmentComponent } from './jobs-managment.component';

describe('JobsManagmentComponent', () => {
  let component: JobsManagmentComponent;
  let fixture: ComponentFixture<JobsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
