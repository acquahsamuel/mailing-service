import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


export interface EmailSummary{
  id : string;
  subject : string;
  form : string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = "https://api.angular-email.com";


  constructor(private http: HttpClient) { }

  getEmails() {
    // da < extactDatayouWnatFromAPI >
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }
}
