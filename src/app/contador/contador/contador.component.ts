//Paquete, component para extraer el paquete especifico Componente propio de angular
import { Component } from '@angular/core';

//se copia y pega el html de app-component.html 
@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1> 
    <h3>la base es: <strong>{{base}}</strong></h3>
    <button (click)="acumular(base)">+{{base}}</button> 
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    `
})
//Se copia y pega el contenido de export class AppComponent, de app.component.ts
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 20;
    base: number = 10;

    acumular(valor: number) {
        this.numero = this.numero + valor
    }
}