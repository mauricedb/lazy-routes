import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
];
const routerModule = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [BooksComponent],
})
export class Mod1Module { }
