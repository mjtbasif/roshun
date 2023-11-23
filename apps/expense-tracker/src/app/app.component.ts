import { Component } from '@angular/core';
import { MainContainerComponent } from './container/main-container/main-container.component';

@Component({
  standalone: true,
  imports: [MainContainerComponent] ,
  selector: 'roshun-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'expense-tracker';
}
