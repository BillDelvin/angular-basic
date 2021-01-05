import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeModel } from './models/employe.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor() {}
  private employeData: EmployeModel[] = [];
  employeSubs = new Subject<EmployeModel[]>();

  addEmploye(value: EmployeModel) {
    this.employeData.push(value);
    this.employeSubs.next(this.employeData.slice());
  }
}
