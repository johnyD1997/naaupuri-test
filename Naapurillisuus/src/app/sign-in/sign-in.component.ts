import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire//compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  firebaseErrorMessage: string;
  loginForm: FormGroup;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router){
    this.firebaseErrorMessage = '';
    this.loginForm = new FormGroup({
      'email': new FormControl ('', [Validators.required, Validators.email]),
      'password': new FormControl ('', Validators.required)
    });
  }
  login(){
    // if(this.loginForm.invalid)
    //   return;

      this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
        if(result == null){
          console.log('login into...');
          this.router.navigate(['/helper-dashboard']);
        }
        else if(result.isValid = false){
          console.log('page reloaded')
          this.firebaseErrorMessage = result.message;
        }
      }).catch(() => {

      });
  }
}
