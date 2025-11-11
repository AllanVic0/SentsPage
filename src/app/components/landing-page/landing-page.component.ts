import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  currentTheme: 'light' | 'dark' = 'light';
  whatsappNumber: string = '5511999999999'; // Coloque seu número com código do país (55) + DDD + número

  ngOnInit(): void {
    // Carrega o tema salvo do localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      // Detecta preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.currentTheme);
  }

  private applyTheme(): void {
    document.body.setAttribute('data-theme', this.currentTheme);
  }

  abrirWhatsApp(mensagem: string = ''): void {
    const mensagemEncoded = encodeURIComponent(mensagem);
    const url = `https://wa.me/${this.whatsappNumber}?text=${mensagemEncoded}`;
    window.open(url, '_blank');
  }

  solicitarOrcamento(): void {
    const mensagem = 'Olá! Gostaria de solicitar um orçamento para um projeto. Poderia me passar mais informações?';
    this.abrirWhatsApp(mensagem);
  }

  contatoRapido(): void {
    const mensagem = 'Olá! Gostaria de mais informações sobre os serviços da SENTS.';
    this.abrirWhatsApp(mensagem);
  }
}

