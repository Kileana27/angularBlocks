import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {

  camille: Developer = new Developer(
    'Blond',
    'Camille',
    28,
    'F',
    'I am Camille',
    [
      new Skill(
        'Angular',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7TsOFCIB5djibRqCtfZbqsZs4sqzZ4TJwV_8lbT-JA&s',
        'https://v17.angular.io/docs'
      ),
      new Skill(
        'Java',
        'https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png?f=webp&w=256',
        'https://dev.java/'
      )
    ]
  )
}