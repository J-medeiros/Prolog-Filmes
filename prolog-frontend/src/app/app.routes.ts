import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./teste/teste.module').then(m => m.TesteModule),
        data: { title: 'Home', description: 'Panina inicial' }
    },
    {
        path: 'Listar',
        loadChildren: () => import('./teste/teste.module').then(m => m.TesteModule),
        data: { title: 'Home', description: 'Buscar filmes pelos nomes de seus nome!' }
    }
];
