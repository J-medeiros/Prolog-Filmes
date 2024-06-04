import { Component, OnInit } from '@angular/core';
import { DiretoresPorFilmeService } from '../../services/diretores-por-filme.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-consultar-diretores-por-filme',
  templateUrl: './consultar-diretores-por-filme.component.html',
  styleUrls: ['./consultar-diretores-por-filme.component.css'],
  standalone: true,
  imports:
    [
      FormsModule,
      CommonModule,
      HttpClientModule
    ],
  providers: [DiretoresPorFilmeService]
})
export class ConsultarDiretoresPorFilmeComponent implements OnInit {

  filme!: string;
  diretores: any[] = [];

  constructor(private diretoresPorFilmeService: DiretoresPorFilmeService) { }

  consultar() {
    this.diretoresPorFilmeService.diretoresPorFilme(this.filme).subscribe(response => {
      this.diretores = response.diretores;
    });
  }

  ngOnInit() {
  }

}
