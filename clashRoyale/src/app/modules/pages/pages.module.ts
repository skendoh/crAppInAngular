import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MakeDecksComponent } from './make-decks/make-decks.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, MakeDecksComponent, LoginComponent, RegistroComponent],
  exports: [HomeComponent, MakeDecksComponent, LoginComponent, RegistroComponent],
  providers: [HomeService]
})
export class PagesModule { }
