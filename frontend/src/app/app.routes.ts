import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PiscinaComponent } from './piscina/piscina.component';
import { MercadinhoComponent } from './mercadinho/mercadinho.component';
import { PrestacaoComponent } from './prestacao/prestacao.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona a raiz para /home
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'piscina', component: PiscinaComponent },
  { path: 'mercadinho', component: MercadinhoComponent },
  { path: 'prestacao', component: PrestacaoComponent },
  { path: 'faleconosco', component: FaleConoscoComponent }
];
