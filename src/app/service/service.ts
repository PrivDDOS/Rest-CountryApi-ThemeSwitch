import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceFunction {

  selectedCountry: any = null;
  isDarkMode: boolean = false;

  setSelectedCountry(country: string) {
    this.selectedCountry = country;
  }

  getSelectedCountry() {
    return this.selectedCountry;
  }

  toggleDarkModeService() {
    this.isDarkMode = !this.isDarkMode
  }

  darkMode() {
    return this.isDarkMode
  }

}
