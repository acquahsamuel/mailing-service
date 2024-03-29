import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });



  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    // this.authService.signin(this.authForm.value).subscribe({
    //   next: () => {},
    //   error: ({ error }) => {
    //     if (error.username || error.password) {
    //       this.authForm.setErrors({ credentials: true });
    //     }
    //   }
    // });
  }


}
