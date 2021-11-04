import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./modules/login/login.component";
import { RegisterComponent } from "./modules/register/register.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "", children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }


