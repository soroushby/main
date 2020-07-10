import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http
      .get<{ message: string; patients: any }>(
        'http://localhost:3000/api/patients'
      )
      .pipe(map((data) => data.patients));
  }

  addPatients(patientName, patientAge, patientsNumber) {
    const patient = {
      name: patientName,
      age: patientAge,
      number: patientsNumber,
    };
    return this.http.post<{ message: string }>(
      'http://localhost:3000/api/patients',
      patient
    );
  }
}
