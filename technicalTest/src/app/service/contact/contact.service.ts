import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contact } from '../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'https://reqres.in/api/';

  constructor(private httpClient: HttpClient) {
    
  }

  

  createContact(body: Contact): Observable<Contact> {
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.httpClient.post<Contact>(this.url+"contact", body, {headers: headers})
  }
}
