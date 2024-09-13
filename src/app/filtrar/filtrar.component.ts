import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtrar',
  standalone: true,
  imports: [],
  templateUrl: './filtrar.component.html',
  styleUrl: './filtrar.component.css'
})
export class FiltrarComponent {
  @Output()
  public isAcending: EventEmitter<boolean> = new EventEmitter();
  @Output()
  public sortEpisodes: EventEmitter<void> = new EventEmitter();
  @Output()
  public sortDate: EventEmitter<void> = new EventEmitter();
  @Output()
  public sortName: EventEmitter<void> = new EventEmitter();


  public isAscendingBool: boolean = true;


  public onAscending(): void {
    console.log("Emiting OnAscending");
    this.isAscendingBool = !this.isAscendingBool;
    this.isAcending.emit(this.isAscendingBool);
  }

  public sortByEpisodes(): void {
    console.log("Emiting sortEpisodes");
    this.sortEpisodes.emit();
  }

  public sortByDate(): void {
    console.log("Emiting sortDate");
    this.sortDate.emit();
  }

  public sortByName(): void {
    console.log("Emiting sortDate");
    this.sortName.emit();
  }

}
