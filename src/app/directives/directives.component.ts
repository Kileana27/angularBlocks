import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass, NgStyle, CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;
  isGuestListDisplayed: boolean = true;
  songList: string[] = ["Everywhere, Nowhere", "Anoana", "Seeing Red", "Tout petit moineau"];
  isAdmin: boolean = true;
}
