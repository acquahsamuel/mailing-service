import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./admin/account/account.component";
import { CertificatesComponent } from "./admin/certificates/certificates.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { PurchasesComponent } from "./admin/purchases/purchases.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },


  { path: "dashboard/courses", component: DashboardComponent },
  { path: "dashboard/certificates", component: CertificatesComponent },
  { path: "dashboard/purchases", component: PurchasesComponent },
  { path: "dashboard/account", component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
