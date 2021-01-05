import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { EmployeModel } from '../models/employe.model';

@Component({
  selector: 'app-table-employe',
  templateUrl: './table-employe.component.html',
  styleUrls: ['./table-employe.component.css'],
})
export class TableEmployeComponent implements OnInit {
  constructor(private appService: AppService) {}
  employeSubs!: Subscription;
  employeData: EmployeModel[] = [];

  ngOnInit() {
    this.employeSubs = this.appService.employeSubs.subscribe((response) => {
      this.employeData = response;
    });
  }
}
