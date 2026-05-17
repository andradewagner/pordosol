import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent],
  template: `<h1>Site Pôr do Sol rodando com Angular!</h1>`,
  templateUrl: './app.html',
  styles: ['./app.css'],
})
export class AppComponent {
  title = 'frontend';
}