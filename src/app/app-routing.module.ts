import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/signup/signup.component';


const routes: Routes = [


  { path : '' , component : SignupComponent  },

  { path: '**', redirectTo: '' }

  

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


