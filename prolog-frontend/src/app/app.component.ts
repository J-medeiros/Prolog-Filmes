import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prolog-frontend';

  @Input() titlePag: string = 'Titulo da Pagina';
  @Input() description: string = 'Descrição da Pagina';
}
