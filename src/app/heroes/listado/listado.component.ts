import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
heroes:string[]=['Iroman', 'wonderWoman', 'Superman', 'AmericanCaptan'];
heroeBorrado:string = '';

borrarHeroe(){
  // || '' string vacion para que se defina en la función pop que tipo de valor necesito
  this.heroeBorrado=this.heroes.pop() || ''; 
 
}
}
