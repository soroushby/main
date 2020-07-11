import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, observable } from 'rxjs';
import { map, find } from 'rxjs/operators';
import { GridApi } from 'ag-grid-community';
import { Patient } from '../patient';

@Component({
  selector: 'app-load-patients',
  templateUrl: './load-patients.component.html',
  styleUrls: ['./load-patients.component.scss'],
})
export class LoadPatientsComponent implements OnInit {
  gridApi;

  constructor(private patientsService: PatientsService) {}

  ngOnInit() {}

  onDelete(patientId) {
    this.patientsService.deletePatient(patientId).subscribe((data) => {
      console.log(data);
    });
  }

  patients = this.patientsService.getPatients();

  columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      width: 600,
    },
    {
      headerName: 'Age',
      field: 'age',
      sortable: true,
      filter: true,
    },
    { headerName: 'Number', field: 'number', sortable: true, filter: true },
    { headerName: 'Parity', field: 'parity', sortable: true, filter: true },
  ];

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;
    api.sizeColumnsToFit();
  }

  selectAll() {
    this.gridApi.selectAll();
  }

  deSelectAll() {
    this.gridApi.deselectAll();
  }
}
