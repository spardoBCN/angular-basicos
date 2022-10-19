import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    //quiero crearme una propiedad, que transforme el nombre. La forma de hacerlo es con GET o SET  
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        //return this.nombre + ' - ' + this.edad;
        return `${ this.nombre } - ${ this.edad }`;  //tanto la línea de arriba como esta son exactamente lo mismo. Solo que los `` me sirven para crear templates ya de un string, y es más fácil insertar valores
    }

    cambiarNombre(): void {
        //vamos a cambiar la propiedad "nombre" de la clase, voy asignarle otra cosa
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        //vamos a cambiar la propiedad "edad" de la clase, voy asignarle otra cosa      
        this.edad = 30;
    }
}