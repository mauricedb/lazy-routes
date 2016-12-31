import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthorsComponent]
})
export class Mod2Module { }

export { AuthorsComponent } from './authors/authors.component';
