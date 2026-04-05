import { Component } from '@angular/core';
import { ServiceFunction } from '../../service/service';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class InfoComponent {

  selectedCountry: any;

  constructor(
    private serviceFunction: ServiceFunction,
  ) {
    this.selectedCountry = this.serviceFunction.getSelectedCountry()
  }

  toggleDarkMode() {
    this.serviceFunction.darkMode();
  }

}
