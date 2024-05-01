import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastsContainerComponent } from './src/shared/toasts-container/toasts-container.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbTooltipModule, ToastsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
