import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './Components/nav-component/nav-component.component';
import { NavComponent } from './Components/nav/nav.component';
import { SearchComponent } from './Components/search/search.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { AddComponent } from './Components/add/add.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    NavComponent,
    SearchComponent,
    DeleteComponent,
    AddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
