import { Component, OnInit, signal } from '@angular/core';
import { PrologService } from '../services/prolog.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
  , providers: [PrologService]
})
export class TesteComponent implements OnInit {

  title = 'Prolog teste';
  diretor: string = '';
  filmes = signal<string[]>([]); // Ajuste para string[]

  titlePag!: string;
  description!: string;

  constructor(private serviceTeste: PrologService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.titlePag = data['title'];
      this.description = data['description'];
    });
  }

  buscarFilmes() {
    this.serviceTeste.filmesPorDiretor(this.diretor).subscribe(response => {
      this.filmes.set(response.filmes); // Define o array completo de filmes
      console.log(this.filmes(), response.filmes);
    });
  }
}
