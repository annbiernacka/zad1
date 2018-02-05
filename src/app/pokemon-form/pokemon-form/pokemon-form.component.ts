import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {
  pokeName : string;
  pokeInfo : string;
  infoPoke: string;
  submitted = false;
  constructor(private http: Http) { }
  onSubmit(formValue) { 
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+formValue.name+'/').map( res => res.json()
    ).subscribe( (data) => {
    this.pokeName = data.name;
    if(formValue.info == "weight") {
      this.infoPoke = "Weight";
      this.pokeInfo = (
      Math.round(
        (parseInt(data.weight) * 0.1)*100)/100
    ).toString() + " kg";
    }
    if(formValue.info == "height"){
      this.infoPoke = "Height";
      this.pokeInfo = (
      Math.round(
        (parseInt(data.height) * 0.1)*100)/100
    ).toString() + " m";
    } 
    if(formValue.info == "base experience"){
      this.infoPoke = "Base experience";
      this.pokeInfo = data.base_experience;
    } 
    this.submitted = true;  });
  }
 // get diagnostic() { return JSON.stringify(this.personProp); }
}
  
