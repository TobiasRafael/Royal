import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  public addPropertyForm: FormGroup;

  constructor(private router: Router) {
    this.addPropertyForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      type: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  get Name() {
    return this.addPropertyForm.get('name') as FormControl;
  }

  get Type() {
    return this.addPropertyForm.get('type') as FormControl;
  }

  get Price() {
    return this.addPropertyForm.get('price') as FormControl;
  }


  onSubmit() {
    console.log(this.addPropertyForm);
  }

}
