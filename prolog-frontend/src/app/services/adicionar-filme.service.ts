import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdicionarFilmeService {
  private apiUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) { }

  adicionarFilme(filme: string, diretor: string, ano: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/adicionar_filme`, { filme, diretor, ano });
  }
}
