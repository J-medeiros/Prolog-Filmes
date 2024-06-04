import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendarFilmeService {

  private apiUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) { }

  consultarFilmesPorCategoria(categoria: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/consultar/filmes_por_categoria`, { categoria });
  }
}