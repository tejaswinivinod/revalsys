import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  submitted: boolean = false;
  feedBackForm: FormGroup;
  feedBackValues;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.feedBackForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      MobileNo: ['', [Validators.required]],
      comments: ['', [Validators.required]],
    });
  }

    get f() { return this.feedBackForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.feedBackForm.invalid) {
      return
    } 
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.feedBackForm.value))
      localStorage.setItem("feedBackValue",JSON.stringify(this.feedBackForm.value))
      this.feedBackValues = JSON.parse(localStorage.getItem("feedBackValue"))

  }
}
