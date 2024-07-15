import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http:HttpClient) {
  } 
    getALLDoctors():any{
      return this.http.get('http://localhost:8087/getALLDoctors');
    }

  
}
