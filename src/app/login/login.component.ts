import { Component  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Utils } from '../utils/utils'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

    constructor(
      private formBuilder: FormBuilder, private utils: Utils) { 
        this.form = this.formBuilder.group({
          name: '',
        })
      }

  submitted: boolean = false;

  login() {
    console.log('submitted')
    this.submitted = true;
  }

  onSubmit() {
    this.utils.setCustomerSessionId(this.utils.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'))
    this.form.reset()
  }
}
