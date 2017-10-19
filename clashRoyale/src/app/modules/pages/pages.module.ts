import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class PagesModule { }
