import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  email = 'velan30000@gmail.com';
  github = 'https://github.com/velan-11';
  linkedin = 'https://www.linkedin.com/in/velan-j-0041621b1';

  links = [
    { href: '#about', label: 'about' },
    { href: '#skills', label: 'skills' },
    { href: '#work', label: 'work' },
    { href: '#contact', label: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 16);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
