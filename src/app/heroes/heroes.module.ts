import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule ({
    //declaraciones son arreglos, que componentes contiene4n este modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
  //exports cosas visibles fueras del modulo
  exports:[
    ListadoComponent
  ],

  //imports van todos los modulos unicamente
  imports:[
    CommonModule //Sirve para exportar ngif, ngfor, directrices basicas de angular
  ]
    })
export class Heroesmodule {

}