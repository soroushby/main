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
  }

  onDelete(patientId) {
    this.patientsService.deletePatient(patientId).subscribe((data) => {
      console.log(data);
    });
  }

  columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      width: 600,
    },
    { headerName: 'Age', field: 'age', sortable: true, filter: true },
    { headerName: 'Number', field: 'number', sortable: true, filter: true },
    { headerName: 'Parity', field: 'parity', sortable: true, filter: true },
  ];
}
