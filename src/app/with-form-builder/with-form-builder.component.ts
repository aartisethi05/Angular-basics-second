import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl ,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-with-form-builder',
  templateUrl: './with-form-builder.component.html',
  styleUrls: ['./with-form-builder.component.css']
})
export class WithFormBuilderComponent implements OnInit {
  myForm:FormGroup;
  constructor(private formbuild:FormBuilder) { 
    this.myForm = formbuild.group({
      name:['aarti',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required]],
      password: [],
      details : formbuild.group({
      nickname: [],
      desig: []
    })
  });
  }
  
  designation=['dev','tester'];
  ngOnInit(): void {
   
  }

  setData(){
    this.myForm.setValue({
      name:'abc',
      email:'myemail',
      password: 1234,
      details : {
      nickname: 'a',
      desig: 'dev'
    }
    })
  }

  patchData(){
    this.myForm.patchValue({
      name:'xyz',
      email:'yoemail',
     
    })
  }
  submit(){
    console.log(this.myForm);
    console.log(this.myForm);
  }
}
