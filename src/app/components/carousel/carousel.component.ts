import { Component } from "@angular/core";
import { Imagens } from '../../model/carousel.model';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'util-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  imgs!:Array<Imagens>;

  constructor(

  ){
    this.imgs = [
      {url:'https://place-hold.it/300x500',alt:'Teste',link:'/'},
      {url:'https://place-hold.it/300x500',alt:'Teste',link:'/'},
      {url:'https://place-hold.it/300x500',alt:'Teste',link:'/'},
      {url:'https://place-hold.it/300x500',alt:'Teste',link:'/'},
      {url:'https://place-hold.it/300x500',alt:'Teste',link:'/'}
    ];
  }

}
