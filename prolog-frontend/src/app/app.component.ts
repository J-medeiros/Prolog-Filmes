import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarFilmeComponent } from './Pages/adicionar-filme/adicionar-filme.component';
import { ConsultarDiretoresPorFilmeComponent } from './Pages/consultar-diretores-por-filme/consultar-diretores-por-filme.component';
import { ConsultarFilmesPorAnoComponent } from './Pages/consultar-filmes-por-ano/consultar-filmes-por-ano.component';
import { ConsultarFilmesPorDiretorComponent } from './Pages/consultar-filmes-por-diretor/consultar-filmes-por-diretor.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      RouterOutlet,
      SideNavComponent,
      HttpClientModule,
      AdicionarFilmeComponent,
      ConsultarDiretoresPorFilmeComponent,
      ConsultarFilmesPorAnoComponent,
      ConsultarFilmesPorDiretorComponent
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prolog-frontend';

  @Input() titlePag: string = 'Titulo da Pagina';
  @Input() description: string = 'Descrição da Pagina';
}
