import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books/books.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BooksComponent]
})
export class Mod1Module { }
export { BooksComponent } from './books/books.component';
