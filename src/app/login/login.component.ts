import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// import { biocatch } from "../../scripts/biocatch";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    constructor(
    private formBuilder: FormBuilder,
  ) {}

  submitted: boolean = false;

  login() {
    console.log('submitted')
    this.submitted = true;
  }

  onSubmit(): void {
    console.log('ddd')
    setCustomerSessionId('test')
    // this.loginForm.reset();
  }
}
