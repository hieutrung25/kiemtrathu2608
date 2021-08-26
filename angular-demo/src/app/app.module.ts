import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BooksCreateComponent} from './books/books-create/books-create.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { BooksDeleteComponent } from './books/books-delete/books-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksCreateComponent,
    BooksEditComponent,
    BooksDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
