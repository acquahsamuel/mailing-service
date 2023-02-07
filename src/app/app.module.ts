import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationService } from './shared/services/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailCreateComponent } from './modules/inbox/email-create/email-create.component';
import { EmailIndexComponent } from './modules/inbox/email-index/email-index.component';
import { EmailShowComponent } from './modules/inbox/email-show/email-show.component';
import { EmailReplyComponent } from './modules/inbox/email-reply/email-reply.component';
 
@NgModule({
  declarations: [
    AppComponent,
    EmailCreateComponent,
    EmailIndexComponent,
    EmailShowComponent,
    EmailReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    NotificationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
