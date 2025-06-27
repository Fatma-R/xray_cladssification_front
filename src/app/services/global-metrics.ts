import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from  '../../environment/environment.dev';

export interface GlobalMetrics { //faster than a class
  id?: number;
  round: number;
  testLoss: number;
  testAccuracy: number;
  sensitivity: number;
  specificity: number;
  datetime: string;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalMetricsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllMetrics(): Observable<GlobalMetrics[]> {
    return this.http.get<GlobalMetrics[]>(`${this.apiUrl}/metrics/all`);
  }

  getLatestMetrics(): Observable<GlobalMetrics> {
    return this.http.get<GlobalMetrics>(`${this.apiUrl}/metrics/latest`);
  }

  saveMetrics(metrics: GlobalMetrics): Observable<GlobalMetrics> {
    return this.http.post<GlobalMetrics>(`${this.apiUrl}/metrics/save`, metrics);
  }
}
