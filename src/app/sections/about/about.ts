import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  facts = [
    { k: 'role',     v: 'Full-Stack Developer' },
    { k: 'company',  v: 'Cognizant' },
    { k: 'location', v: 'Chennai, India' },
    { k: 'focus',    v: 'Java · Spring Boot · Angular' },
  ];
}
