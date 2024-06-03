import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class SideNavComponent implements OnInit {
  isActive: boolean = false;


  constructor() { }

  ngOnInit() {
  }


  toggleSidenav() {
    this.isActive = !this.isActive;
  }

}
