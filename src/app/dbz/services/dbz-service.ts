import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root' // esto se integro desde la versión 6 de angular, lo que nos permite es que desde toda la aplicación tengamos el mismo estado de este servicio. (es un servicio singletown --> la misma instancia en todos los sitios)
})
export class DbzService {
    constructor() { }

    public characters: Character[] = [
        {id: uuid(),name:'Krillin',power:1000},
        {id: uuid(),name:'Goku',power:9500},
        {id: uuid(),name:'Vegeta',power:7500},
    ]

    onNewCharacter(character: Character): void {
        //debugger;
        const newCharacter: Character = {...character, id: uuid() } // recogo todos los datos y sobreescribo los campos que quiero
        //character.id = uuid(); me parece que de esta forma tambien podria funcionar
        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number): void {
    //     //debugger;
    //     this.characters.splice(index,1);
    // }

    deleteCharacterById( id: string) {
        this.characters = this.characters.filter((character: Character) => character.id !== id);
    }
}