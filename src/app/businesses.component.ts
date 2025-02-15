import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'businesses',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  providers: [DataService],
  templateUrl: './businesses.component.html',
  styleUrl: './businesses.component.css',
})
export class BusinessesComponent {
  business_list: any;
  page: number = 1;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }
    this.business_list = this.dataService.getBusinesses(this.page);
  }

  previousPage() {
    if (this.page === 1) {
      return;
    }

    this.page = this.page - 1
    sessionStorage['page'] = this.page;
    this.business_list =
      this.dataService.getBusinesses(this.page);
  }
  nextPage() {
    if (this.page === this.dataService.getLastPageNumber()) {
      return;
    }

    this.page = this.page + 1
    sessionStorage['page'] = this.page;
    this.business_list =
      this.dataService.getBusinesses(this.page);
  }
}
