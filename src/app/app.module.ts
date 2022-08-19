import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Heroesmodule } from './heroes/heroes.module';
import { Contadormodule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [ //componentes que se estan utilizando
    AppComponent,
   
    //se agrega para que se ejecuten los nuevos cambios en app.component.ts
  ],
  imports: [
    BrowserModule,
    Heroesmodule,
    Contadormodule,
    DbzModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
