import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFunction } from '../../service/service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
