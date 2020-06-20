import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }
  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;
  design:string;
  designation=['dev','tester'];
  onSubmit(form) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }
  ngOnInit(): void {
  }

}
