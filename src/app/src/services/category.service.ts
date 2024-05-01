import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment.development';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private httpService = inject(HttpService);

  getCategoriesFromApi() {
    return this.httpService
      .get(`${environment.nodeApi}${environment.categoriesEndpoint}`)
      .pipe(take(1));
  }
}
