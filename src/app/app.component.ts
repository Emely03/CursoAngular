import{ Component } from '@angular/core';

@Component({
  selector: 'app-root', //app-root viene directamente de una etiqueta en html
  templateUrl: 'app.component.html' //especifica el archivo donde se encuentra el html que va hacer utilizado como componente para mostrar la informacion de html
  //template=se puede definir y cambiar lo que se encuetra escrito en elcomponent.html

})
export class AppComponent {
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero = this.numero + valor
    //se utiliza this para hacer referencia a la propiedad de la clase +=1 y/o -=1
  }

}



