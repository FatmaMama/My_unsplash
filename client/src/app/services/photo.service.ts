import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../Models/photo.model';

const baseUrl = 'http://localhost:8080/api/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>(baseUrl);
  }

  get(id: any): Observable<Photo> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

 
  delete(label: any): Observable<any> {
    return this.http.delete(`${baseUrl}?label=${label}`);
  }


  findByLabel(label: any): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${baseUrl}?label=${label}`);
  }
}
