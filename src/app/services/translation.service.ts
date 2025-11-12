import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<'pt' | 'en'>('pt');
  currentLang$ = this.currentLangSubject.asObservable();

  private translations: any = {
    'nav.home': { pt: 'Home', en: 'Home' },
    'nav.about': { pt: 'Sobre', en: 'About' },
    'nav.services': { pt: 'Serviços', en: 'Services' },
    'nav.budget': { pt: 'Orçamento', en: 'Budget' },
    
    'hero.title': { pt: 'Transformamos Ideias em Soluções Digitais', en: 'We Transform Ideas into Digital Solutions' },
    'hero.subtitle': { pt: 'Desenvolvimento de software personalizado para impulsionar o seu negócio', en: 'Custom software development to boost your business' },
    'hero.cta': { pt: 'Solicitar Orçamento', en: 'Request Quote' },
    
    'about.title': { pt: 'Sobre A Sents', en: 'About Sents' },
    'about.subtitle': { pt: 'Conheça nossa história e valores', en: 'Know our history and values' },
    'about.who.title': { pt: 'Quem Somos', en: 'Who We Are' },
    'about.who.text1': { pt: 'A SENTS é uma fábrica de software dedicada a criar soluções tecnológicas inovadoras e personalizadas. Com uma equipe altamente qualificada, transformamos desafios complexos em sistemas eficientes e escaláveis.', en: 'SENTS is a software factory dedicated to creating innovative and customized technological solutions. With a highly qualified team, we transform complex challenges into efficient and scalable systems.' },
    'about.who.text2': { pt: 'Nossa missão é impulsionar o sucesso dos nossos clientes através da tecnologia, entregando produtos de alta qualidade que superam expectativas.', en: 'Our mission is to drive our clients\' success through technology, delivering high-quality products that exceed expectations.' },
    'about.stats.projects': { pt: 'Projetos Concluídos', en: 'Completed Projects' },
    'about.stats.satisfaction': { pt: 'Satisfação dos Clientes', en: 'Client Satisfaction' },
    'about.stats.clients': { pt: 'Clientes Ativos', en: 'Active Clients' },
    
    'services.title': { pt: 'Nossos Serviços', en: 'Our Services' },
    'services.subtitle': { pt: 'Soluções completas para o seu negócio', en: 'Complete solutions for your business' },
    'services.web.title': { pt: 'Desenvolvimento Web', en: 'Web Development' },
    'services.web.desc': { pt: 'Aplicações web modernas e responsivas com as melhores tecnologias do mercado', en: 'Modern and responsive web applications with the best market technologies' },
    'services.mobile.title': { pt: 'Aplicativos Mobile', en: 'Mobile Apps' },
    'services.mobile.desc': { pt: 'Apps nativos e híbridos para iOS e Android com experiência excepcional', en: 'Native and hybrid apps for iOS and Android with exceptional experience' },
    'services.corporate.title': { pt: 'Sistemas Corporativos', en: 'Corporate Systems' },
    'services.corporate.desc': { pt: 'Soluções empresariais integradas para otimizar seus processos de negócio', en: 'Integrated business solutions to optimize your business processes' },
    'services.cloud.title': { pt: 'Cloud Computing', en: 'Cloud Computing' },
    'services.cloud.desc': { pt: 'Infraestrutura escalável e segura na nuvem para seu negócio crescer', en: 'Scalable and secure cloud infrastructure for your business to grow' },
    'services.design.title': { pt: 'UI/UX Design', en: 'UI/UX Design' },
    'services.design.desc': { pt: 'Interfaces intuitivas e atraentes focadas na experiência do usuário', en: 'Intuitive and attractive interfaces focused on user experience' },
    'services.support.title': { pt: 'Suporte e Manutenção', en: 'Support and Maintenance' },
    'services.support.desc': { pt: 'Suporte técnico especializado e manutenção contínua de sistemas', en: 'Specialized technical support and continuous system maintenance' },
    
    'budget.title': { pt: 'Vamos Conversar Sobre Seu Projeto?', en: 'Let\'s Talk About Your Project?' },
    'budget.description': { pt: 'Entre em contato conosco pelo WhatsApp e receba um orçamento personalizado', en: 'Contact us via WhatsApp and receive a personalized quote' },
    'budget.cta': { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' },
    
    'footer.tagline': { pt: 'Transformando ideias em realidade digital', en: 'Transforming ideas into digital reality' },
    'footer.quicklinks': { pt: 'Links Rápidos', en: 'Quick Links' },
    'footer.services': { pt: 'Serviços', en: 'Services' },
    'footer.social': { pt: 'Redes Sociais', en: 'Social Media' },
    'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
    
    'theme.dark': { pt: 'Modo Escuro', en: 'Dark Mode' },
    'theme.light': { pt: 'Modo Claro', en: 'Light Mode' },

    'feedback.1.text': { pt: 'A SENTS transformou completamente nossa operação digital. O sistema desenvolvido superou todas as expectativas e trouxe resultados impressionantes!', en: 'SENTS completely transformed our digital operation. The system developed exceeded all expectations and brought impressive results!' },
    'feedback.1.author': { pt: 'Carlos Silva', en: 'Carlos Silva' },
    'feedback.1.role': { pt: 'CEO - TechCorp', en: 'CEO - TechCorp' },
    
    'feedback.2.text': { pt: 'Profissionalismo e qualidade excepcionais. A equipe da SENTS entendeu perfeitamente nossas necessidades e entregou uma solução perfeita.', en: 'Exceptional professionalism and quality. The SENTS team perfectly understood our needs and delivered a perfect solution.' },
    'feedback.2.author': { pt: 'Maria Santos', en: 'Maria Santos' },
    'feedback.2.role': { pt: 'Diretora de TI - Innovate', en: 'IT Director - Innovate' },
    
    'feedback.3.text': { pt: 'Excelente parceria! O app desenvolvido pela SENTS aumentou nossa produtividade em 40%. Recomendo fortemente!', en: 'Excellent partnership! The app developed by SENTS increased our productivity by 40%. Highly recommend!' },
    'feedback.3.author': { pt: 'João Oliveira', en: 'João Oliveira' },
    'feedback.3.role': { pt: 'Gerente - LogisticPro', en: 'Manager - LogisticPro' },
    
    'feedback.4.text': { pt: 'Suporte impecável e sistema robusto. A SENTS nos ajudou a modernizar completamente nossa infraestrutura.', en: 'Impeccable support and robust system. SENTS helped us completely modernize our infrastructure.' },
    'feedback.4.author': { pt: 'Ana Costa', en: 'Ana Costa' },
    'feedback.4.role': { pt: 'CTO - FinanceHub', en: 'CTO - FinanceHub' },
    
    'feedback.5.text': { pt: 'Equipe altamente capacitada e comprometida. O projeto foi entregue antes do prazo e com qualidade superior!', en: 'Highly skilled and committed team. The project was delivered ahead of schedule and with superior quality!' },
    'feedback.5.author': { pt: 'Pedro Almeida', en: 'Pedro Almeida' },
    'feedback.5.role': { pt: 'Fundador - StartupX', en: 'Founder - StartupX' }
  };

  constructor() {
    const savedLang = localStorage.getItem('lang') as 'pt' | 'en';
    if (savedLang) {
      this.currentLangSubject.next(savedLang);
    }
  }

  translate(key: string): string {
    const lang = this.currentLangSubject.value;
    return this.translations[key]?.[lang] || key;
  }

  setLanguage(lang: 'pt' | 'en') {
    this.currentLangSubject.next(lang);
    localStorage.setItem('lang', lang);
  }

  toggleLanguage() {
    const newLang = this.currentLangSubject.value === 'pt' ? 'en' : 'pt';
    this.setLanguage(newLang);
  }
}
