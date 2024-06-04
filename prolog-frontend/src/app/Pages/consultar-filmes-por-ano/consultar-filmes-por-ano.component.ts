import { Component, OnInit } from '@angular/core';
import { FilmesPorAnoService } from '../../services/filmes-por-ano.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-consultar-filmes-por-ano',
  templateUrl: './consultar-filmes-por-ano.component.html',
  styleUrls: ['./consultar-filmes-por-ano.component.css'],
  standalone: true,
  imports:
    [
      FormsModule,
      CommonModule,
      HttpClientModule
    ],
  providers: [FilmesPorAnoService]
})
export class ConsultarFilmesPorAnoComponent implements OnInit {

  ano!: number;
  filmes: any[] = [];

  constructor(private filmesPorAnoService: FilmesPorAnoService) { }

  consultar() {
    this.filmesPorAnoService.filmesPorAno(this.ano).subscribe(response => {
      this.filmes = response.filmes;
      // console.log(response)
    });
  }

  ngOnInit() {
  }

}
