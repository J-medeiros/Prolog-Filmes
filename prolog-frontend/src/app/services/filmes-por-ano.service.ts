import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesPorAnoService {
  private apiUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) { }

  filmesPorAno(ano: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/consultar/filmes_por_ano`, { ano });
  }
}