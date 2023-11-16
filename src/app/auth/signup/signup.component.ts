import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from './signup-request.payload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupRequestPayload: SignupRequestPayload;
  signUpForm: FormGroup
  
  constructor(private authService: AuthService){
    this.signupRequestPayload = {
      username: "",
      email: "",
      password: ""
    }
  }
  ngOnInit(): void {
      this.signUpForm = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),

      })
  }
  signup(){
    this.signupRequestPayload.email = this.signUpForm.get('email')?.value;
    this.signupRequestPayload.username = this.signUpForm.get('username')?.value;
    this.signupRequestPayload.password = this.signUpForm.get('password')?.value;
    this.authService.signUp(this.signupRequestPayload).subscribe(data => console.log(data))
  }
}
