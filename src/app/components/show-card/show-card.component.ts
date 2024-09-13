import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';  // Importa CommonModule para usar ngFor
import { Show } from '../../interfaces/show.interface';


@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [ShowComponent, CommonModule],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowComponent {
    @Output()
    public deleteCard : EventEmitter<string> = new EventEmitter();

    @Output()
    public editCard : EventEmitter<Show> = new EventEmitter();


    @Input()
    public show: Show = {
      description: "",
      episodes: 0,
      genre: "",
      image: "",
      likes: [],
      name: "",
      year: 0
    }

    public isSelected: boolean = false;

    public onSelect(): void {
      this.isSelected = !this.isSelected;
    }

    public onEdit(): void{
      //console.log("Editing card" + this.show.name);
      this.editCard.emit(this.show);
    }

    public onDeleteCard(){
      console.log("Eliminando CARD " + this.show.name);
      this.deleteCard.emit(this.show.name);
    }

}
