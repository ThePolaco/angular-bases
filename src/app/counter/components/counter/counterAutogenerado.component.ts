//para crear un componente a traves de la extension Angular Snippets 
//debemos escribir en una linea "a-" y elegir lo que queremos crear
import { Component } from '@angular/core';

@Component({
    selector: 'app-counter-autogenerado',
    template: `
    <p>Counter: {{ counter }} </p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset(10)">Reset</button>
    
    `
})

export class CounterAutogeneradoComponent {
    public counter: number = 10;

    increaseBy(value: number):void {
        this.counter +=value;
    }
    reset(value: number):void{
        this.counter = value;
    }

}