import { Injectable } from '@angular/core';
import { Kitten } from './common/kitten.model';

@Injectable({
  providedIn: 'root'
})
export class KittenCardService {

  public kittenList : Array<Kitten> = [{name:"Simba",race:"Bengal",age: 2,pictures:"https://media.shoko.fr/article-3820226-head-f10/disney-le-roi-lion-simba-le-roi-lion-live.jpg"}]
  public userCollection : Array<Kitten> = [{name:"O'Malley",race:"Munchkin",age: 5,pictures:"https://disney-planet.fr/wp-content/uploads/2015/03/thomas-omalley-personnage-les-aristochats-02.jpg"}]
 
  constructor() { }

  newKitten(kitty:Kitten){

    this.kittenList.push(kitty)
    console.log(this.kittenList)

  }

  newKittenAdopted(kitty:Kitten){

    let idx = this.kittenList.indexOf(kitty)
    this.kittenList.splice(idx,1);
    this.userCollection.push(kitty);

  }

}
