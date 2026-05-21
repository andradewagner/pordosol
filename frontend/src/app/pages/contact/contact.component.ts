import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContatoUtil {
  nome: string;
  servico: string;
  telefone: string;
  imagemUrl: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contatos: ContatoUtil[] = [
    {
      nome: 'Light',
      servico: 'Concessionária de Energia',
      telefone: '0800 021 0196',
      imagemUrl: 'https://www.light.com.br/SiteAssets/images/logo.png' // Substitua pelo caminho real
    },
    {
      nome: 'Iguá / Cedae',
      servico: 'Distribuição de Água',
      telefone: '0800 400 0509',
      imagemUrl: 'https://way2.com.br/wp-content/themes/way2/assets/logo-clientes/igua.png'
    },
    {
      nome: 'Portaria Principal',
      servico: 'Segurança Interna',
      telefone: '(21) 99686-4952',
      imagemUrl: 'assets/imagens/portaria-icon.png'
    },
    {
      nome: 'Naturgy',
      servico: 'Fornecimento de Gás',
      telefone: '0800 240197',
      imagemUrl: 'https://www.minhanaturgy.com.br/hc/theming_assets/01HZPP6EVY0M1TK4RKD7646RAB'
    },
    {
      nome: 'Administradora CS',
      servico: 'Administraçao condominial',
      telefone: '(21) 2548-2426',      
      imagemUrl: '/logo-cs.png'
    }
  ];

  fazerLigacao(telefone: string) {
    window.location.href = `tel:${telefone.replace(/\s+/g, '')}`;
  }
}