import { Routes } from '@angular/router';
import { SubmissionFormComponent } from './src/components/submission-form/submission-form.component';

export const routes: Routes = [
  { path: 'notifications', component: SubmissionFormComponent },
  { path: '**', component: SubmissionFormComponent },
];
