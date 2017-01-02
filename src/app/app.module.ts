import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';

const routes: Routes = [
];
const routerModule = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    Mod1Module,
    Mod2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
