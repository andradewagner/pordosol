import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Essencial para o [(ngModel)] funcionar
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-prestacao',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // <-- Adicionados aqui
  templateUrl: './prestacao.component.html',
  styleUrls: ['./prestacao.component.css']
})
export class PrestacaoComponent implements OnInit {
  private http = inject(HttpClient);

  // Propriedades de Controle de Estado de Login
  estaLogado: boolean = false;
  erroMensagem: string = '';
  codigo: string = '';
  senha: string = '';

  // Dados da Prestação de Contas (Seu layout anterior)
  mesReferencia: string = 'Abril de 2026';
  totalReceitas: number = 45200.00;
  totalDespesas: number = 38150.00;
  
  get saldoAtual(): number { 
    return this.totalReceitas - this.totalDespesas; 
  }

  fluxo = [
    { categoria: 'Taxa Condominial', tipo: 'receita', valor: 43500.00, porcentagem: 100 },
    { categoria: 'Folha de Pagamento (Funcionários)', tipo: 'despesa', valor: 18000.00, porcentagem: 41 },
    { categoria: 'Manutenção de Elevadores', tipo: 'despesa', valor: 5200.00, porcentagem: 12 },
    { categoria: 'Contas de Consumo (Água/Luz)', tipo: 'despesa', valor: 7800.00, porcentagem: 18 },
    { categoria: 'Fundo de Reserva / Obras', tipo: 'despesa', valor: 4500.00, porcentagem: 10 }
  ];

  ngOnInit() {
    // Verifica se já existe uma sessão ativa no navegador do morador
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('pordosol_token');
      if (token) {
        this.estaLogado = true;
      }
    }
  }

  executarLogin() {
    this.erroMensagem = '';
    
    const urlEndpoint = window.location.hostname === 'localhost' ? 'http://localhost:3000/api/login' : '/api/login';

    this.http.post<{sucesso: boolean, token: string, mensagem: string}>(urlEndpoint, {
      codigoMorador: this.codigo,
      senha: this.senha
    }).subscribe({
      next: (resposta) => {
        if (resposta.sucesso) {
          localStorage.setItem('pordosol_token', resposta.token);
          this.estaLogado = true;
        }
      },
      error: (err) => {
        this.erroMensagem = err.error?.mensagem || 'Código do morador ou senha incorretos.';
      }
    });
  }

  fazerLogout() {
    localStorage.removeItem('pordosol_token');
    this.estaLogado = false;
    this.codigo = '';
    this.senha = '';
  }
}
