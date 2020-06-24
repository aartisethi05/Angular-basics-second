import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  public employees=[];

  constructor(private es:HttpServiceService) { }

  ngOnInit(): void {
    this.es.getEmployees().subscribe(data=>{
      this.employees=data})
  
  console.log('hy');
  console.log(this.employees);
    }

}
