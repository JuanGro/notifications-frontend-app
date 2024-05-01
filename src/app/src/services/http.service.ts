import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Notification } from '../models/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private httpClient = inject(HttpClient);

  get(url: string) {
    return this.httpClient.get(url);
  }

  post(url: string, body: Notification) {
    return this.httpClient.post(url, body);
  }
}
