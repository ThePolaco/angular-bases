import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //creamos un evento de tipo output
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character);
    //debugger; // debuger nos permite parar el codigo al pasar por esta linea de codigo
    if(this.character.name.length === 0) return; // si el nombre esta vacion no dejamos que continue
    this.onNewCharacter.emit({...this.character}); //Emitimos el objeto recogido para que lo reciba el padre, creamos un objeto nuevo con los datos para eliminar la referencia
    this.character.name = '';
    this.character.power = 0;
  }


}
