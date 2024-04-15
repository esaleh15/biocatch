import { Component  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

    constructor(
      private formBuilder: FormBuilder
    ) { this.form = this.formBuilder.group({
      name: '',
    })}

  submitted: boolean = false;

  login() {
    console.log('submitted')
    this.submitted = true;
  }

  onSubmit() {

  }
}
