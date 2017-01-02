import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooksComponent],
})
export class Mod1Module { }
