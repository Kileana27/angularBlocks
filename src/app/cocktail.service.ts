import { Injectable, inject } from '@angular/core';
import { Cocktail } from './models/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

 private http = inject(HttpClient);

 contructor() {}

 getCocktails(): Observable<Cocktail[]> {
  return this.http.get<Cocktail[]>("assets/data/cocktails.json");
 }
}

