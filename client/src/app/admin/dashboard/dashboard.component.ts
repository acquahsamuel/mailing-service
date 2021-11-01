import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = 'Acquah Samuel';
  userProfile = './assets/images/user.jpg';
  brandlogo   = './assets/images/white-navbar-brand.png';
}

