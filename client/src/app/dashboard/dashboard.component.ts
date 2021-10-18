import { Component } from "@angular/core";
import { SocialAuthService } from "angularx-social-login";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  constructor(
    private router: Router,
    public socialAuthServive: SocialAuthService
  ) {}

  logOut(): void {
    this.socialAuthServive
      .signOut()
      .then(() => this.router.navigate(["login"]));
  }

  viewTable(): void {
    this.router.navigate(["table"]);
  }
}
