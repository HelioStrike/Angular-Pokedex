import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { Pokemon } from './pokemon';
import { defineBase } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getAllPokemonFromDB() : Observable<any[]> {
    return this.db.collection('pokemon').valueChanges();
  }

  getPokemonFromDB(name: string) : Observable<any[]> {
    return this.db.collection('pokemon', ref => ref.where("name","==",name)).valueChanges();
  }

  getPokemonFromAPI(name: string) : Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }

  savePokemonToDB(pokemon: Pokemon) : void {
    this.db.collection('pokemon').add(pokemon);
  }

  constructor(private db: AngularFirestore, private http: HttpClient) {
  }
}
