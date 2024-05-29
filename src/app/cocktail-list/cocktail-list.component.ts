import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  public cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
