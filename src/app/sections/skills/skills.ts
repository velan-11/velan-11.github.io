import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      title: 'Backend',
      items: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'JPA / Hibernate', 'JUnit'],
    },
    {
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3 / SCSS', 'Responsive Design'],
    },
    {
      title: 'Tools & Workflow',
      items: ['Git', 'Maven', 'Postman', 'IntelliJ', 'VS Code', 'Agile / Scrum'],
    },
  ];
}
