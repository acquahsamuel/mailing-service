import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  logo = "assets/images/logo-1.jpg";
  hide = true;

  loginWithGoogle() { }

}
