import { Routes } from '@angular/router';
import { AdicionarFilmeComponent } from './Pages/adicionar-filme/adicionar-filme.component';
import { ConsultarDiretoresPorFilmeComponent } from './Pages/consultar-diretores-por-filme/consultar-diretores-por-filme.component';
import { ConsultarFilmesPorAnoComponent } from './Pages/consultar-filmes-por-ano/consultar-filmes-por-ano.component';
import { ConsultarFilmesPorDiretorComponent } from './Pages/consultar-filmes-por-diretor/consultar-filmes-por-diretor.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     loadComponent: () => import('./teste/teste.module').then(m => m.TesteModule),
    //     data: { title: 'Home', description: 'Panina inicial' }
    // },
    {
        path: 'Listar',
        loadChildren: () => import('./teste/teste.module').then(m => m.TesteModule),
        data: { title: 'Home', description: 'Buscar filmes pelos nomes de seus nome!' }
    },
    { path: 'consultar-filmes-por-diretor', component: ConsultarFilmesPorDiretorComponent },
    { path: 'consultar-filmes-por-ano', component: ConsultarFilmesPorAnoComponent },
    { path: 'consultar-diretores-por-filme', component: ConsultarDiretoresPorFilmeComponent },
    { path: 'adicionar-filme', component: AdicionarFilmeComponent },
    { path: '', redirectTo: '/consultar-filmes-por-diretor', pathMatch: 'full' }
];
