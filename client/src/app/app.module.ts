
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from "@angular/common/http"

//components
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component'
import { DeleteComponent } from './Components/delete/delete.component';
import { AddComponent } from './Components/add/add.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './Components/nav/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DeleteComponent,
    AddComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
