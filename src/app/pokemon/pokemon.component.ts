import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() id: Pokemon; 
  @Input() name: Pokemon; 
  @Input() type: Pokemon; 
  @Input() image: Pokemon; 

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
