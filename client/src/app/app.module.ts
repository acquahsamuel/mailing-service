// Angular core components
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

//Custome Component
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SocialLoginModule, GoogleLoginProvider } from "angularx-social-login";
import { AuthGuardService } from "./shared/core/services/auth-guard.service";

/**
 * @acquah_samuel
 * @angular_demo_project
 */

//Importing all custom built component
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,

    //Routes handling
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "table",
        component: TableComponent,
        canActivate: [AuthGuardService],
      },
    ]),
  ],

  /**
   * Goole authentication strategy implementation
   */
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "692129481622-42qtu20qjlufevnrju5l7m9i2emiaoq8.apps.googleusercontent.com"
            ),
          },
        ],
      },
    },
    SocialLoginModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
