import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  

  constructor(private http:HttpClient) { }
  getALLPatients():any{
    return this.http.get<any>('http://localhost:8087/getALLPatients');
  }
  getPatientById(id:any):any{
    return this.http.get('http://localhost:8087/getPatientById/{id}');
  }
  getPatientByName():any{
    return this.http.get('http://localhost:8087/getPatientByName/{name}');
  }
  register(patientData:any):any{
    return this.http.post('http://localhost:8087/registerPatients',patientData);
  }
}
