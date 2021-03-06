import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss']
})
export class PokemonCollectionComponent implements OnInit {

  public pokemons: Pokemon[];
  @Input() searchName: string;

  searchPokemon() {
    this.service.getPokemonFromDB(this.searchName.toLowerCase()).subscribe(data => {
      if(data.length == 0) {
        this.service.getPokemonFromAPI(this.searchName.toLowerCase()).subscribe(ddata => {
          let type = "";
          ddata["types"].forEach(t => {
            type += t["type"]["name"] + " + ";
          });
          type = type.substring(0,type.length-3);

          this.pokemons = [{
            "id": ddata["id"],
            "name": this.searchName,
            "type": type, 
            "image": ddata["sprites"]["front_default"],
            "moves": ddata["moves"],
            "height": ddata["height"],
            "weight": ddata["weight"]
          }];

          this.service.savePokemonToDB(this.pokemons[0]);
        });
      } else {
        this.pokemons = data;
      }
    });
  }

  constructor(private service: PokemonService) {
  }

  ngOnInit() {
  }

}
