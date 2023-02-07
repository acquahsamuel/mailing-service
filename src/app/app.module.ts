import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailCreateComponent } from './modules/inbox/email-create/email-create.component';
import { EmailIndexComponent } from './modules/inbox/email-index/email-index.component';
import { EmailShowComponent } from './modules/inbox/email-show/email-show.component';
import { EmailReplyComponent } from './modules/inbox/email-reply/email-reply.component';
import { HomeComponent } from './modules/inbox/home/home.component';
import { InboxModule } from './modules/inbox/inbox.module';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SignoutComponent } from './modules/auth/signout/signout.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
 
@NgModule({
  declarations: [
    AppComponent,
    EmailCreateComponent,
    EmailIndexComponent,
    EmailShowComponent,
    EmailReplyComponent,
    HomeComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InboxModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
