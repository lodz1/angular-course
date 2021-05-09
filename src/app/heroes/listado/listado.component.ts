import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  constructor() {
    console.log('constructor');

   }

   borrarHeroe(){
     this.heroeBorrado = this.heroes.shift() || '';

   }

}
