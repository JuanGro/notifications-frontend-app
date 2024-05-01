import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { Notification } from '../models/notification.interface';
import { environment } from '../../../environments/environment.development';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private httpService = inject(HttpService);

  sendNotificationToApi(notification: Notification) {
    return this.httpService
      .post(
        `${environment.nodeApi}${environment.notificationsEndpoint}`,
        notification
      )
      .pipe(take(1));
  }
}
