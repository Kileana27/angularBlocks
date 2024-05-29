import { Component } from '@angular/core';
import { CreateOnomatopiaComponent } from '../create-onomatopia/create-onomatopia.component';



@Component({
  selector: 'app-onomatopia-list',
  standalone: true,
  imports: [CreateOnomatopiaComponent],
  templateUrl: './onomatopia-list.component.html',
  styleUrl: './onomatopia-list.component.css'
})
export class OnomatopiaListComponent {
  onomatopiaList: string[] = ['Boom', 'Paf', 'Roar']

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopiaList.push(newOnomatopia);
  }
}
