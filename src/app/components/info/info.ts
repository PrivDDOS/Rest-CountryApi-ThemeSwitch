import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFunction } from '../../service/service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrls: ['./info.css'],
})
export class InfoComponent {

  selectedCountry: any;

  constructor(
    public serviceFunction: ServiceFunction,
  ) {
    this.selectedCountry = this.serviceFunction.getSelectedCountry()
  }

  toggleDarkMode() {
    this.serviceFunction.toggleDarkModeService();
  }

}
