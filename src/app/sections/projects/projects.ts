import { Component } from '@angular/core';
import { PROJECTS, Project } from './projects.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
