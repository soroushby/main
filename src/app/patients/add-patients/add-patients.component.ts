import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.scss'],
})
export class AddPatientsComponent implements OnInit {
  patientForm: any;
  tester: any;
  constructor(
    private fb: FormBuilder,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      number: ['', Validators.required],
      parity: [''],
    });
  }
  save() {
    this.patientsService
      .addPatients(
        this.patientForm.get('name').value,
        this.patientForm.get('age').value,
        this.patientForm.get('number').value
      )
      .subscribe((data) => (this.tester = data));
  }
}
