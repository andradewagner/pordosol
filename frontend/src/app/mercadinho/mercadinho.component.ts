import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CategoriaProduto {
  nome: string;
  itens: string;
  iconeUrl: string;
}

@Component({
  selector: 'app-mercadinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mercadinho.component.html',
  styleUrls: ['./mercadinho.component.css']
})
export class MercadinhoComponent {
  // Configurações básicas
  localizacao: string = 'Área da Piscina';
  funcionamento: string = 'Aberto 24h — Todos os dias';

  categorias: CategoriaProduto[] = [
    { nome: 'Bebidas Geladas', itens: 'Refrigerantes, sucos, cervejas e águas', iconeUrl: 'https://aarkayvaishnodhaba.com/wp-content/uploads/2022/04/cans.webp' },
    { nome: 'Snacks & Doces', itens: 'Batatas, chocolates, balas e salgadinhos', iconeUrl: 'https://supernova.vteximg.com.br/arquivos/ids/162503-1000-1000/Snack-Specialle-Sabor-Requeijao-130g---Kuky-1.jpg?v=638417173040000000' },
    { nome: 'Congelados & Práticos', itens: 'Pizzas, lasanhas e sorvetes', iconeUrl: 'https://s2-receitas.glbimg.com/BmkjA0L1Z3ciNldyhh8gYxrT_MQ=/1366x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2025/i/t/M0NAabSCKba8nzZy6wzw/pizza-margherita-receita.jpg' },
    { nome: 'Higiene & Limpeza', itens: 'Papel higiênico, sabonete,应急 itens', iconeUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HjPyUhTF1CSeVwHjcReBvnLVwdvURg6iOg&s' }
  ];

  abrirAppMercado() {
    // Aqui você pode colocar o link real do app parceiro (ex: Market4u, Nutricar, etc.)
    window.open('https://exemplo.com', '_blank');
  }
}