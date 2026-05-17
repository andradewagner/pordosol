import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Permite usar routerLink no HTML

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink], // Importações necessárias
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // As duas propriedades abaixo resolvem os erros TS2339
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}