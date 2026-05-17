import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piscina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './piscina.component.html',
  styleUrls: ['./piscina.component.css']
})
export class PiscinaComponent {
  // Configurações simples que você pode mudar facilmente
  piscinaAberta: boolean = true; 
  horarioFuncionamento: string = 'Terça a Domingo, das 08h às 22h';
  
  regras = [
    'Obrigatório ducha antes de entrar na água.',
    'Proibido garrafas, copos ou objetos de vidro na área interna.',
    'Crianças menores de 12 anos devem estar acompanhadas.',
    'Não é permitido caixas de som particulares.'
  ];

  solicitarReserva() {
    alert('Redirecionando para o sistema de reserva de churrasqueira, salao de festas...');
  }
}
