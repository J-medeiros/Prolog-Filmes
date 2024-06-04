import { Component, OnInit } from '@angular/core';
import { FilmesPorDiretorService } from '../../services/filmes-por-diretor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-consultar-filmes-por-diretor',
  templateUrl: './consultar-filmes-por-diretor.component.html',
  styleUrls: ['./consultar-filmes-por-diretor.component.css'],
  standalone: true,
  imports:
    [
      FormsModule,
      CommonModule,
      HttpClientModule
    ],
  providers: [FilmesPorDiretorService]
})
export class ConsultarFilmesPorDiretorComponent implements OnInit {

  diretor!: string;
  filmes: any[] = [];

  constructor(private filmesPorDiretorService: FilmesPorDiretorService) { }

  ngOnInit() {
  }

  consultar() {
    this.filmesPorDiretorService.filmesPorDiretor(this.diretor).subscribe(response => {
      this.filmes = response.filmes;
      console.log(response.filmes)
    });
  }
}


