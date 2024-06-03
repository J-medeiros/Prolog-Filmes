import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PrologService {
    private apiUrl = 'http://localhost:3000/filmes'; // Ajuste o caminho da API

    constructor(private http: HttpClient) { }

    filmesPorDiretor(diretor: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/consultar/filmes_por_diretor`, { diretor });
    }
}
