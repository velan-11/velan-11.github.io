import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  email = 'velan30000@gmail.com';
  year = new Date().getFullYear();
}
