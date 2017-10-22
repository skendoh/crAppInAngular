import { RegistroComponent } from '../modules/pages/registro/registro.component';
import { LoginComponent } from '../modules/pages/login/login.component';
import { MakeDecksComponent } from '../modules/pages/make-decks/make-decks.component';
import { HomeComponent } from '../modules/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'creadorMazos', component: MakeDecksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
export const appRouting = RouterModule.forRoot(routes);
