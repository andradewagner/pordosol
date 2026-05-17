import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Noticia {
  id: number;
  titulo: string;
  categoria: 'Aviso' | 'Manutenção' | 'Evento' | 'Segurança';
  data: string;
  resumo: string;
  conteudoCompleto: string;
  imagemUrl?: string;
  expandido?: boolean;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Modernização das Câmeras de Segurança',
      categoria: 'Segurança',
      data: 'Hoje',
      resumo: 'Manutenção do sistema de segurança reativando câmeras que estavam desligadas.',
      conteudoCompleto: 'Visando aumentar a segurança de todos fizemos a manutenção do sistema de câmeras, reativando as que estavam desligadas. Agora, todas as áreas comuns estão monitoradas 24h por dia, garantindo mais tranquilidade para os moradores. Em caso de dúvidas ou para solicitar acesso às imagens, entre em contato com a administração.',
      imagemUrl: 'https://altave.com.br/wp-content/uploads/2024/09/cameras-de-seguranca-tipos-e-funcionalidades.jpg'
    },
    {
      id: 2,
      titulo: 'Dedetização Geral das Áreas Comuns',
      categoria: 'Manutenção',
      data: 'Ontem',
      resumo: 'Em breve faremos a dedetização semestral obrigatória.',
      conteudoCompleto: 'Em conformidade com as normas de saúde e segurança, realizaremos a dedetização semestral de todas as áreas comuns do condomínio. Agradecemos a compreensão de todos.',
    }
  ];

  alternarLeitura(noticia: Noticia) {
    noticia.expandido = !noticia.expandido;
  }
}