import { Component } from '@angular/core';
import { Signup } from '../models/signup.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newSignup: Signup = {
    contact: "",
    firstname: "",
    lastname: "",
    password: ""
  }

  onSubmit(): void {
    console.log(this.newSignup)
  }
}
