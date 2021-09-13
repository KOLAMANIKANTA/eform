import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { LformService } from 'src/app/services/lform.service';
@Component({
  selector: 'app-lform',
  templateUrl: './lform.component.html',
  styleUrls: ['./lform.component.css']
})
export class LformComponent implements OnInit {
  public employees : IUser[];
  constructor(private employeeService:LformService) { }

  ngOnInit(): void {
  }
  public getData():void{
    this.employeeService.fetchAllEmployees().subscribe((data) => {
      this.employees = data;
    });
}
}
