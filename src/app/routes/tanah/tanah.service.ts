import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tanah } from './Tanah';

@Injectable({
  providedIn: 'root',
})
export class TanahService {
  constructor(public http: HttpClient) {}

  getAllTanah(): Observable<Tanah[]> {
    return this.http.get<Tanah[]>('/api/v1/tanah/list');
  }

  simpanTanah(tanah: Tanah): Observable<Tanah> {
    return this.http.post<Tanah>('http://localhost:5050/api/v1/tanah', tanah);
  }
}
