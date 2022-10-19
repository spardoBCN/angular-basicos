import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //las declaraciones, van a ser los componentes que tengo dentro de la carpeta de "Heroes"
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //los exports, significan qué cosas quiero hacer públicas o visibles fuera de este módulo
        ListadoComponent
    ],
    imports: [ //los imports, significa que aquí dentro van sólo módulos
        CommonModule  //este módulo ofrece las directivas *ngFor, *ngIf, etc...
    ]
})

export class HeroesModule {}