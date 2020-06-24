import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-with-form-control',
  templateUrl: './with-form-control.component.html',
  styleUrls: ['./with-form-control.component.css']
})
export class WithFormControlComponent {

  constructor() { }
  myForm =  new FormGroup({
   name: new FormControl('rt',[Validators.required,Validators.minLength(3)]),
   email: new FormControl('',Validators.required),
   password: new FormControl(),
   details : new FormGroup({
   nickname: new FormControl(),
   desig: new FormControl()
  })
  });
  designation=['dev','tester'];
  ngOnInit(): void {
  }
  submit(){
    console.log(this.myForm);
    console.log(this.myForm);
  }

}
