import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], // Asegúrate de importar ReactiveFormsModule aquí
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnChanges {
  @Output()
  public createElement: EventEmitter<Show> = new EventEmitter();

  @Input()
  public show: Show = {
    description: "",
    episodes: 0,
    genre: "",
    image: "",
    likes: [],
    name: "",
    year: 0
  };

  public form: FormGroup;
  public isFormSubmitted = true;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show']) {
      this.updateForm(changes['show'].currentValue);
    }
  }

  private updateForm(show: Show): void {
    this.form.patchValue({
      name: show.name,
      image: show.image,
      description: show.description
    });
  }

  public onFormSubmit(): void {

    if (this.form.valid) {
      this.show.name = this.form.value.name;
      this.show.description = this.form.value.description;
      this.show.image = this.form.value.image;

      //Emitir evento al padre y pasarle el objeto show
      this.createElement.emit(this.show);
      this.form.reset();
    } else {
      console.log("form -- " + this.show.name);
      console.log("Faltan datos GG");
    }
  }
}
