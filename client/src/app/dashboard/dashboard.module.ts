import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

import { AccountComponent } from './modules/account/account.component';
import { CertificatesComponent } from './modules/certificates/certificates.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { PurchasesComponent } from './modules/purchases/purchases.component';

@NgModule({
    declarations: [
        AccountComponent,
        CertificatesComponent,
        CoursesComponent,
        PurchasesComponent
    ],
    imports: [
        FormsModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [

    ],
})
export class DashboardModule { }
