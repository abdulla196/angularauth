import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    firstname: null,
    lastname: null,
    phone: null,
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const { username, email, password } = this.form;


      this.authService.register(this.form).subscribe(
        (response) => {
          console.log('Response from server:', response);
          // Handle the response as needed
        },
        (error) => {
          console.error('Error during registration:', error);
          // Handle the error as needed
        }
      );
   
    
    
  }
}
