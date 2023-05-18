import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-inside-popup',
  templateUrl: './inside-popup.component.html',
  styleUrls: ['./inside-popup.component.css']
})
export class InsidePopupComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}


}
