import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceFunction {

  selectedCountry: any = null;

  setSelectedCountry(country: string) {
    this.selectedCountry = country;
  }

  getSelectedCountry() {
    return this.selectedCountry;
  }

  darkMode() {
    let container = document.getElementById("container");
    container?.classList.toggle("dark-mode");
  }

}
