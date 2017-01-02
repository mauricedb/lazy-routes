import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthorsComponent]
})
export class Mod2Module { }
