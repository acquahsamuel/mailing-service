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
import { CardComponent } from './modules/card/card.component';
import { CardsComponent } from './modules/cards/cards.component';
import { ButtonComponent } from './modules/button/button.component';
import { TypeCheckComponent } from './modules/type-check/type-check.component';
import { SecuritySessionComponent } from './modules/security-session/security-session.component';
import { WikipediaComponent } from './modules/wikipedia/wikipedia.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    ButtonComponent,
    TypeCheckComponent,
    SecuritySessionComponent,
    WikipediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    NotificationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
