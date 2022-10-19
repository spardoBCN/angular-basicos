import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  //vamos a crear un Array de Strings, y lo inicializaremos con varios valores
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  
  //creamos una variable para poder retornar y mostrar el Heroe que hemos eliminado
  heroeBorrado: string = '';
  

  borrarHeroe() {
    console.log('borrando...'); 
    //queremos borrar:
    //1.- inicializando a un Array vacio, borramos todo
    //this.heroes = []; 

    //2.- remueve el primer elemento del Array y lo retorna
    //this.heroes.shift();

    //const heroeBorrado = this.heroes.shift();
    //console.log(heroeBorrado); 

    //el shift() puede retornar Underfind, si es así podemos hacer que retorne '' usando el operador OR ||
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
