import { Category } from './categories.interface';

export interface Notification {
  category: Category | null;
  message: string | null;
}
