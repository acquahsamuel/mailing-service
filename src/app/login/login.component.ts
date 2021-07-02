import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SocialAuthService, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  logo = "";
  hide = true;
  constructor(private router: Router, private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {});
  }

  onClick() {
    this.router.navigate(["dashboard"]);
  }

  loginWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(["dashboard"]));
  }

  logout(): void {
    this.authService.signOut();
  }
}
