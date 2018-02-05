import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {
  personName : string;
  personProp : string;
  prop: string;
  submitted = false;
  constructor(private http: Http) { }
  onSubmit(formValue) { 
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+formValue.name+'/').map( res => res.json()
    ).subscribe( (data) => {
    this.personName = data.name;
    if(formValue.power == "weight") {
      this.prop = "Weight";
      this.personProp = (
      Math.round(
        (parseInt(data.weight) * 0.1)*100)/100
    ).toString() + " kg";
    }
    if(formValue.power == "height"){
      this.prop = "Height";
      this.personProp = (
      Math.round(
        (parseInt(data.height) * 0.1)*100)/100
    ).toString() + " m";
    } 
    if(formValue.power == "base experience"){
      this.prop = "Base experience";
      this.personProp = data.base_experience;
    } 
    this.submitted = true;  });
  }
 // get diagnostic() { return JSON.stringify(this.personProp); }
}
  
