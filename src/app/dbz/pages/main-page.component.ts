import { Component, OnInit, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz-service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbzService: DbzService){} // aqui se inyectan las dependencias
    //Los servicios casi siempre deberian ser privados por lo que se necesitaria crear estos metodos para poder acceder a variables de nuestro servicio.
    get characters(): Character[] { 
        return [...this.dbzService.characters]
    }
    
    onDeleteCharacter ( id: string): void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.onNewCharacter(character);
    }
}