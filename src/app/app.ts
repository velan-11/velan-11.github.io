import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { SkillsComponent } from './sections/skills/skills';
import { ProjectsComponent } from './sections/projects/projects';
import { ContactComponent } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
