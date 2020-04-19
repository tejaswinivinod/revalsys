import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],

    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.loginForm.valid) {
      if(this.loginForm.value.email == "tejaswini.abbindi@gmail.com" && this.loginForm.value.password == "vinodteja"){
         
        this.router.navigate(["/list"])
      }
    } else 
    if(this.loginForm.value.email != "tejaswini.abbindi@gmail.com" && this.loginForm.value.password != "vinodteja"){
         
      // return('please check credentials ')
      alert('please check credentials!! :-)\n\n')
    }
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
}
