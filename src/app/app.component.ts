import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //aplicación principal
  templateUrl: './app.component.html' 
})
export class AppComponent {
  //title = 'bases';  //esto es el nombre del proyecto que yo le di
  /*
  titulo: string = 'Contador App'; 
  numero: number = 10; //lo dejamos inicializado
  base: number = 5;

  sumar() {
    this.numero += 1; // es la forma corta de numero = numero + 1 
  }
  restar() {
    this.numero -= 1; // es la forma corta de numero = numero - 1 
  }
  
  //nosotros podríamos tener un único método que pasándole un argumento nos haga o sumar o restar
  acumular( valor: number ) {
    this.numero += valor;
  }
  */
}
