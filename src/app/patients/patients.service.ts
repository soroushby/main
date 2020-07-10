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
      .pipe(
        map((data) =>
          data.patients.map((data) => {
            return {
              name: data.name,
              age: data.age,
              number: data.number,
              parity: data.parity,
              id: data._id,
            };
          })
        )
      );
  }

  addPatients(patientName, patientAge, patientsNumber, parity) {
    const patient = {
      name: patientName,
      age: patientAge,
      number: patientsNumber,
      parity: parity,
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
