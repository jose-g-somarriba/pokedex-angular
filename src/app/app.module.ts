import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexFormComponent } from './pokedex-form/pokedex-form.component';
import { PokedexScreenComponent } from './pokedex-screen/pokedex-screen.component';
import { StatComponent } from './stat/stat.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexFormComponent,
    PokedexScreenComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
