import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form/pokemon-form.component';
import { TextComponent } from './text/text.component';

const appRoutes: Routes = [
  { path: 'form', component: PokemonFormComponent },
  { path: 'text', component: TextComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    PokemonFormComponent,
    TextComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
