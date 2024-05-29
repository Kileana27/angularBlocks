import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktails: Cocktail[] = [
    new Cocktail(
      "Gin Fizz",
      "12€",
      "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2018/06/shutterstock_2181241651-768x512.jpg"
    ),
    new Cocktail(
      "Moscow Mule",
      "14€",
      "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/137002_origin-615x410.jpg"
    ),
    new Cocktail(
      "Blue Margarita",
      "13€",
      "https://www.cocktailmag.fr/media/k2/items/cache/f84d217853d263e771f2d4ffc4c6fcef_M.jpg"
    )
  ];

  getCocktails() {
    return this.cocktails;
  }
}

