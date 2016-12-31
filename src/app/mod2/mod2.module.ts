import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';

const routes: Routes = [
  { path: '', component: AuthorsComponent },
];
const routerModule = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [AuthorsComponent]
})
export class Mod2Module { }
