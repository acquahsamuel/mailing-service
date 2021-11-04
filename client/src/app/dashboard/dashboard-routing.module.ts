import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { CoursesComponent } from "./modules/courses/courses.component";
import { CertificatesComponent } from "./modules/certificates/certificates.component";
import { PurchasesComponent } from "./modules/purchases/purchases.component";
import { AccountComponent } from "./modules/account/account.component";

const routes: Routes = [
    { path: "", component: DashboardComponent },
    {
        path: "dashboard", children: [
            { path: "", component: DashboardComponent },
            { path: "courses", component: CoursesComponent },
            { path: "certificates", component: CertificatesComponent },
            { path: "purchases", component: PurchasesComponent },
            { path: "account", component: AccountComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
