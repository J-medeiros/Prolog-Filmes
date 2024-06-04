import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdicionarFilmeService } from '../../services/adicionar-filme.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adicionar-filme',
  templateUrl: './adicionar-filme.component.html',
  styleUrls: ['./adicionar-filme.component.css'],
  standalone: true,
  imports:
    [
      FormsModule,
      CommonModule,
      HttpClientModule
    ],
  providers: [AdicionarFilmeService]
})
export class AdicionarFilmeComponent implements OnInit {

  filme!: string;
  diretor!: string;
  ano!: number;
  mensagem!: string;

  constructor(private adicionarFilmeService: AdicionarFilmeService) { }

  adicionar() {
    this.adicionarFilmeService.adicionarFilme(this.filme, this.diretor, this.ano).subscribe(response => {
      this.mensagem = 'Filme adicionado com sucesso';
    }, error => {
      this.mensagem = 'Erro ao adicionar filme';
    });
  }

  ngOnInit() {
  }

}
