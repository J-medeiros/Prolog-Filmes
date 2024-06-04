import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdicionarFilmeService } from '../../services/adicionar-filme.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adicionar-filme',
  templateUrl: './adicionar-filme.component.html',
  styleUrls: ['./adicionar-filme.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [AdicionarFilmeService],
})
export class AdicionarFilmeComponent implements OnInit {
  titulo!: string;
  diretor!: string;
  ano!: number;
  imagem!: string;
  mensagem!: string;
  success: boolean = false;

  constructor(private adicionarFilmeService: AdicionarFilmeService) {}

  adicionar() {

      const filme = {
        titulo: this.titulo,
        diretor: this.diretor,
        ano: this.ano,
        imagem: this.imagem,
      };

    this.adicionarFilmeService
      .adicionarFilme(filme)


      .subscribe(
        (response) => {
          this.success = true;
          if ((this.success = true)) {
            Swal.fire({
              icon: 'success',
              title: 'Function updated with success!',
              showConfirmButton: false,
              timer: 2500,
            });
          }
          console.log(this.success);
        },
        (error) => {
          this.mensagem = 'Erro ao adicionar filme';
          console.log(this.success);
        }
      );
  }

  ngOnInit() {}
}
