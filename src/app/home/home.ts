import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  filteredData: any[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get<any[]>('/assets/data.json')
      .subscribe(res => {
        this.data = res;
        this.filteredData = res;
      });
  }

  darkMode() {
    let container = document.getElementById("container");
    container?.classList.toggle("dark-mode");
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
