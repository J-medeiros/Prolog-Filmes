import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesPorDiretorService {
  private apiUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) { }

  filmesPorDiretor(diretor: string) {
    return this.http.post<any>(`${this.apiUrl}/consultar/filmes_por_diretor`, { diretor });
  }

}
