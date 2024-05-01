import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionFormComponent } from './submission-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('SubmissionFormComponent', () => {
  let component: SubmissionFormComponent;
  let fixture: ComponentFixture<SubmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionFormComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require non-empty category', () => {
    component.submissionForm.setValue({
      category: '',
      message: 'Lorem ipsum',
    });

    expect(component.submissionForm.valid).toBeFalse();
  });

  it('should require non-empty message', () => {
    component.submissionForm.setValue({
      category: 'Sports',
      message: '',
    });

    expect(component.submissionForm.valid).toBeFalse();
  });

  it('should be valid with non-empty category and message values', () => {
    component.submissionForm.setValue({
      category: 'Sports',
      message: 'Lorem ipsum',
    });

    expect(component.submissionForm.valid).toBeTrue();
  });

  it('should render form correctly', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#categorySelect')).not.toBeNull();
    expect(compiled.querySelector('#messageInput')).not.toBeNull();
    expect(compiled.querySelector('#sendNotificationButton')).not.toBeNull();
  });

  it('should show validation error if category is empty', () => {
    component.submissionForm.setValue({
      category: '',
      message: 'Lorem ipsum',
    });
    component.submissionForm.markAllAsTouched();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#categoryErrorMessage')).not.toBeNull();
  });

  it('should show validation error if category is empty', () => {
    component.submissionForm.setValue({
      category: 'Sports',
      message: '',
    });
    component.submissionForm.markAllAsTouched();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#messageErrorMessage')).not.toBeNull();
  });
});
