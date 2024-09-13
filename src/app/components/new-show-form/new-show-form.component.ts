import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-show-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './new-show-form.component.html',
  styleUrl: './new-show-form.component.css'
})
export class NewShowFormComponent implements OnInit{
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
  }

  public form: FormGroup;
  public isFormSubmitted = false;

  constructor() {


    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.form.patchValue({
      name: this.show.name,
      image: this.show.image,
      description: this.show.description
    })
  }

  ngOnInit(){
  }

  public onFormSubmit(): void{
        if(this.form.valid){
            const newShow: Show = {
                description: this.form.value.description,
                episodes: 0,
                genre: "",
                image: this.form.value.image,
                likes: [],
                name: this.form.value.name,
                year: 0
            };
            console.log("Evento desde hijo");
            console.log(newShow);
            //Emitir evento al padre y pasarle el objeto show
            this.createElement.emit(newShow);
            this.form.reset();
        } else {
            console.log("form -- " + this.show.name);
            console.log("Faltan datos GG");
        }
  }
}


