import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        FormsModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [
        
    ],
})
export class HomeModule { }
