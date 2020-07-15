import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Patient } from './models/patient';
import { observable, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient> {
    return this.http
      .get<{ message: string; patients: any }>(
        'http://localhost:3000/api/patients'
      )
      .pipe(
        map((data) =>
          data.patients.map((data) => {
            return {
              name: data.name,
              age: data.age,
              number: data.number,
              parity: data.parity,
              id: data._id,
              date: data.date,
            };
          })
        )
      );
  }

  addPatients(patientName, patientAge, patientsNumber, parity, date) {
    const patient = {
      name: patientName,
      age: patientAge,
      number: patientsNumber,
      parity: parity,
      date: date,
    };
    return this.http.post<{ message: string }>(
      'http://localhost:3000/api/patients',
      patient
    );
  }

  deletePatient(patientId) {
    return this.http.delete('http://localhost:3000/api/patients/' + patientId);
  }
}
