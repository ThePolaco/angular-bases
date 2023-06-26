import { NgModule } from "@angular/core";
import { CounterAutogeneradoComponent } from "./counter/counterAutogenerado.component";

@NgModule({
    declarations: [
        CounterAutogeneradoComponent,
    ],
    exports: [
        CounterAutogeneradoComponent, // con esta linea de codigo indicamos que este modulo puede ser usado en el ambito fuera de modulo en el que se encuentra
    ]
})
export class CounterModule {}