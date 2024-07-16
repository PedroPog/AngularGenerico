import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterbarComponent } from "./components/footerbar/footerbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    NavbarComponent,
    FooterbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showFooter: boolean = true;

  title = 'generico';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.checkRoute(event.url);
      }
    });
  }

  checkRoute(url: string) {
    this.showFooter = url !== '/login';
  }
}
