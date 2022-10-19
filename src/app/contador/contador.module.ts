import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [ //las declaraciones, van a ser los componentes que tengo dentro de la carpeta de "Contador"
        ContadorComponent
    ],
    exports: [ //los exports, significan qué cosas quiero hacer públicas o visibles fuera de este módulo
        ContadorComponent
    ]
})

export class ContadorModule {}