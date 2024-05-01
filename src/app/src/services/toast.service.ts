import { Injectable } from '@angular/core';
import { Toast } from '../shared/toasts-container/toast.interface';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  showPrimary(message: string) {
    const toast: Toast = { message, classname: 'bg-primary text-light' };
    this.show(toast);
  }

  showSuccess(message: string) {
    const toast: Toast = { message, classname: 'bg-success text-light' };
    this.show(toast);
  }

  showDanger(message: string) {
    const toast: Toast = { message, classname: 'bg-danger text-light' };
    this.show(toast);
  }

  private show(toast: Toast) {
    this.toasts.push(toast);
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
