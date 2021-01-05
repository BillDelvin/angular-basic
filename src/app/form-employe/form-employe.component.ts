import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form-employe',
  templateUrl: './form-employe.component.html',
  styleUrls: ['./form-employe.component.css'],
})
export class FormEmployeComponent implements OnInit {
  constructor(private appService: AppService) {}

  employeForm!: FormGroup;

  ngOnInit(): void {
    this.initialForm();
  }

  onSubmit() {
    this.appService.addEmploye(this.employeForm.value);
    this.employeForm.reset();
  }

  private initialForm() {
    this.employeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      tanggalLahir: new FormControl('', Validators.required),
      jabatan: new FormControl('', Validators.required),
      nip: new FormControl('', Validators.required),
      jenisKelamin: new FormControl('', Validators.required),
    });
  }
}
