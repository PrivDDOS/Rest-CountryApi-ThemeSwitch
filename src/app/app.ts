import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { InfoComponent } from './components/info/info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, InfoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Country-api-theme-switch');
}
