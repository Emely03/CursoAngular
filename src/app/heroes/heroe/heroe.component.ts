import { Component } from "@angular/core";


@Component({
    selector   : 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'superman';
    edad  : number = 39;

    // crear una propiedad que cuando se llame va hacer procesada pero se vera igual que nombre y edad

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    
    //Funcion para obtener el nombre y la edad
    obtenerNombre():string {
        return `${this.nombre}, ${this.edad}`;
    }
    
    cambiarNombre():void{
        this.nombre="Wondergirl";
    }
    cambiarEdad():void{
        this.edad=40;
    }
    
}

