import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { GlitchComponent } from "../../components/glitch/glitch.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    GlitchComponent,
    CarouselModule,
    ButtonModule,
    TagModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  responsiveOptions: any[] | undefined;
  items = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg",
    "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }


}
