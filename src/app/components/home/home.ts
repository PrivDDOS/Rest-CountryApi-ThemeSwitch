import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { ServiceFunction } from '../../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  filteredData: any[] = [];

  constructor(
    private http: HttpClient,
    public serviceFunction: ServiceFunction,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    this.http.get<any[]>('/assets/data.json')
      .subscribe(res => {
        this.data = res;
        this.filteredData = res;
      });
  }

  toggleDarkMode() {
    this.serviceFunction.toggleDarkModeService();
  }

  onClickCountry(country: any) {
    this.serviceFunction.setSelectedCountry(country);
    this.router.navigate(['/info']);
  }

  searchCountry(country: string) {
    const searchInput = country.trim().toLowerCase();

    if (!searchInput) {
      this.filteredData = [...this.data];
      return;
    }

    this.filteredData = this.data.filter(countryItem =>
      countryItem.name.toLowerCase().includes(searchInput)
    );
  }

  getRegion(region: string) {
    this.filteredData = this.data.filter(country => country.region === region);
  }

}
