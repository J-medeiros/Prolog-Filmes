import { Routes } from '@angular/router';
import { AdicionarFilmeComponent } from './Pages/adicionar-filme/adicionar-filme.component';
import { ConsultarDiretoresPorFilmeComponent } from './Pages/consultar-diretores-por-filme/consultar-diretores-por-filme.component';
import { ConsultarFilmesPorAnoComponent } from './Pages/consultar-filmes-por-ano/consultar-filmes-por-ano.component';
import { ConsultarFilmesPorDiretorComponent } from './Pages/consultar-filmes-por-diretor/consultar-filmes-por-diretor.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'consultar-filmes-por-diretor',
    component: ConsultarFilmesPorDiretorComponent,
  },
  {
    path: 'consultar-filmes-por-ano',
    component: ConsultarFilmesPorAnoComponent,
  },
  {
    path: 'consultar-diretores-por-filme',
    component: ConsultarDiretoresPorFilmeComponent,
  },
  { path: 'adicionar-filme', component: AdicionarFilmeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
