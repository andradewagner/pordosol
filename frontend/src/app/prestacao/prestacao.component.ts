import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FluxoCaixa {
  categoria: string;
  tipo: 'receita' | 'despesa';
  valor: number;
  porcentagem: number; // Usaremos isso para a barra de progresso em CSS
}

@Component({
  selector: 'app-prestacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestacao.component.html',
  styleUrls: ['./prestacao.component.css']
})
export class PrestacaoComponent {
  mesReferencia: string = 'Maio de 2026';
  
  // Resumo do Topo
  totalReceitas: number = 18262.27;
  totalDespesas: number = 6690.37;
  
  get saldoAtual(): number {
    return this.totalReceitas - this.totalDespesas;
  }

  // Maiores movimentações para compor o gráfico visual
  fluxo: FluxoCaixa[] = [
    { categoria: 'Taxa Condominial', tipo: 'receita', valor: 18262.27, porcentagem: 100 },
    { categoria: 'Folha de Pagamento (Funcionários)', tipo: 'despesa', valor: 2665.00, porcentagem: 41 },
    { categoria: 'Manutenção de Elevadores', tipo: 'despesa', valor: 395.13, porcentagem: 12 },
    { categoria: 'Material de Limpeza', tipo: 'despesa', valor: 1240.03, porcentagem: 10 },
    { categoria: 'Administracao Condominial', tipo: 'despesa', valor: 1168.00, porcentagem: 10 }
  ];

  //baixarRelatorioCompleto() {
  //  alert('Fazendo o download do PDF completo com as notas fiscais...');
  //}
}