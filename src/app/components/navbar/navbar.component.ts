import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isToolbarFixed = false;

  nameEmpresa="FirstRow";

  @HostListener('window:scroll',['$event'])
  onScroll(event:Event){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
    document.body.scrollTop || 0;
    this.isToolbarFixed = scrollTop > 50;
  }

}
