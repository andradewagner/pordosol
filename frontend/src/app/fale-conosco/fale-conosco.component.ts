import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fale-conosco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {
  enviadoComSucesso = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Verifica se a URL contém "?sucesso=true" vindo do redirecionamento
    this.route.queryParams.subscribe(params => {
      if (params['sucesso'] === 'true') {
        this.enviadoComSucesso = true;
      }
    });
  }
}