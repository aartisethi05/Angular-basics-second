import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-form',
  templateUrl: './view-child-form.component.html',
  styleUrls: ['./view-child-form.component.css']
})
export class ViewChildFormComponent implements OnInit {

  constructor() { }
@ViewChild('myForm') formData :ElementRef;
@ViewChild('username') userName :ElementRef;
  ngOnInit(): void {
    console.log(this.userName);
    console.log(this.formData);  
  }
  submit()
  {
    console.log(this.userName.nativeElement.value);
    console.log(this.formData.nativeElement);  
  }

}
