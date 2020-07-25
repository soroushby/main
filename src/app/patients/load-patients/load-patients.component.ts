import { PatientsService } from './../patients.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription, observable, Observable } from 'rxjs';
import { map, find } from 'rxjs/operators';
import { GridApi } from 'ag-grid-community';
import { Patient } from '../models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-patients',
  templateUrl: './load-patients.component.html',
  styleUrls: ['./load-patients.component.scss'],
})
export class LoadPatientsComponent implements OnInit {
  // @ViewChild(MatSort, { static: true }) sort: MatSort;
  gridApi;
  gApi;
  columnApi;
  // patients;
  // dataSource;

  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.patientsService.getPatients().subscribe((data) => {
    //   this.patients = data;
    //   this.dataSource = new MatTableDataSource<Patient>(this.patients);
    //   this.dataSource.sort = this.sort;
    //});
    // this.dataSource = new MatTableDataSource(this.patients);
    // this.dataSource.sort = this.sort;
  }

  onDelete(patientId) {
    this.patientsService.deletePatient(patientId).subscribe((data) => {
      console.log(data);
    });
  }

  // displayedColumns: string[] = [
  //   'Name',
  //   'Age',
  //   'Number',
  //   'Parity',
  //   'Date',
  //   'Delete',
  // ];

  patients$: Observable<Patient> = this.patientsService.getPatients();

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
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
  ];

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;

    api.sizeColumnsToFit();
  }

  selectAll() {
    this.gridApi.selectAll();
    this.patients$.subscribe((data) => data.name);
  }

  deSelectAll() {
    this.gridApi.deselectAll();
  }
}
