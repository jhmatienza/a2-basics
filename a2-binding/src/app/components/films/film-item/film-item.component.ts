import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../../shared/models/film.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html'
})
export class FilmItemComponent {
  @Input() film: Film;
  @Output() deleteFilm: EventEmitter<Film> = new EventEmitter<Film>();

  onClickDeleteFilm(): void{
    debugger;
    this.deleteFilm.emit(this.film);
  }

}
