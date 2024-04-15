import { Component  } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Utils } from '../utils/utils'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

    constructor(
      private formBuilder: FormBuilder, private utils: Utils, private router: Router, private http: HttpClient) {
        this.form = this.formBuilder.group({
          name: '',
        })
        console.log('Loading pageContext: Login')
      }

  submitted: boolean = false;

  login() {
    console.log('submitted')
    this.submitted = true;
  }

  onSubmit() {
    this.utils.setCustomerSessionId(this.utils.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'))
    this.router.navigate(['pay']);
    this.init();
  }

  init() {
    let body = {
      "customerId": "dummy",
      "action": "init",
      "customerSessionId": localStorage.getItem("cdSetCsid"),
      "activityType": "LOGIN",
      "uuid": this.utils.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      "brand": "SD",
      "solution": "ATO",
      "iam": "demo@demo.com"
    }
    this.http.post('https://hooks.zapier.com/hooks/catch/1888053/bgwofce', JSON.stringify(body))
            .subscribe( (data) => {
              console.log('Success', data)
    }, (error) => {
      console.log('Error' , JSON.stringify(error))
    })
  }
}
