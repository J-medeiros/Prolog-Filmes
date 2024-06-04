import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiretoresPorFilmeService {
  private apiUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) {}

  diretoresPorFilme(titulo: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/consultar/diretores_por_filme`, {
      titulo,
    });
  }
}
