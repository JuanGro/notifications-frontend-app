import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Notification } from '../../models/notification.interface';
import { NotificationService } from '../../services/notification.service';
import { ToastService } from '../../services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { messages } from '../../locale/messages';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/categories.interface';
import { Message } from '../../models/message.interface';

@Component({
  selector: 'app-submission-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './submission-form.component.html',
  styleUrl: './submission-form.component.scss',
})
export class SubmissionFormComponent implements OnInit {
  messages = messages;
  categories: Category[] = [];
  private notification: Notification = {
    category: null,
    message: null,
  };
  submissionForm = new FormGroup({
    category: new FormControl(this.notification.category?._id, [Validators.required]),
    message: new FormControl(this.notification.message, [Validators.required]),
  });

  private categoryService = inject(CategoryService);
  private notificationService = inject(NotificationService);
  private toastService = inject(ToastService);

  ngOnInit() {
    this.getCategoryOptions();
  }

  private getCategoryOptions() {
    this.categoryService.getCategoriesFromApi().subscribe({
      next: (categories) => (this.categories = categories as Category[]),
      error: (error: HttpErrorResponse) =>
        this.toastService.showDanger(error?.message),
    });
  }

  private sendNotification() {
    this.notificationService
      .sendNotificationToApi(this.notification)
      .subscribe({
        next: (response) => this.toastService.showSuccess((response as Message).message),
        error: (error: HttpErrorResponse) => {
          this.toastService.showDanger(error?.message)}
      });
  }

  sendForm() {
    this.submissionForm.markAllAsTouched();
    if (this.submissionForm.valid) {
      const { message } = this.submissionForm.value;
      const category = this.categories.find(
        (category) => category._id === this.submissionForm.value.category
      );
      this.notification = {
        category: category ?? null,
        message: message ?? null,
      };
      this.sendNotification();
    }
  }
}
