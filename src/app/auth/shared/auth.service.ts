import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signUp(signupRequestPayload: SignupRequestPayload): Observable<any>{
    return this.httpClient.post("http://localhost:9090/api/auth/signup", 
    signupRequestPayload,
    {responseType: 'text'});
  }
}
