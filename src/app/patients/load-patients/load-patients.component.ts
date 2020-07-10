import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, observable } from 'rxjs';
import { map, find } from 'rxjs/operators';

@Component({
  selector: 'app-load-patients',
  templateUrl: './load-patients.component.html',
  styleUrls: ['./load-patients.component.scss'],
})
export class LoadPatientsComponent implements OnInit {
  patients: any = [];
  constructor(private patientsService: PatientsService) {}

  ngOnInit() {
    this.patientsService
      .getPatients()
      .subscribe((data) => (this.patients = data));
    console.log(this.patients);
  }

  onDelete(patientId) {
    this.patientsService.deletePatient(patientId).subscribe((data) => {
      console.log(data);
    });
  }
}
