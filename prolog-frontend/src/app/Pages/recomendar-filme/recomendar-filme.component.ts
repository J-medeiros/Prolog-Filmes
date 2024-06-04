import { Component } from '@angular/core';
import { RecomendarFilmeService } from '../../services/recomendar-filme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recomendar-filme',
  templateUrl: './recomendar-filme.component.html',
  styleUrls: ['./recomendar-filme.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecomendarFilmeService]
})
export class RecomendarFilmeComponent {

  categoria: string = '';
  filmes: any[] = [];

  constructor(private service: RecomendarFilmeService) { }

  ngOnInit(): void {
  }

  consultarFilmes(): void {
    if (this.categoria) {
      this.service.consultarFilmesPorCategoria(this.categoria)
        .subscribe(filmes => this.filmes = filmes);
    }
  }

}
