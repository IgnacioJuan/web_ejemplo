import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class FormComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    
  });
  secondFormGroup = this._formBuilder.group({
    //secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}