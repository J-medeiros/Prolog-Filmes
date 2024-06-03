import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TesteComponent },
      { path: 'Teste', component: TesteComponent }
    ])
  ],
  declarations: []
})
export class TesteModule { }
