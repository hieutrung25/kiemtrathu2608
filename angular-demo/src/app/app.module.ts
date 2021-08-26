import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BooksCreateComponent} from './books/books-create/books-create.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import {BooksDetailComponent} from './books/books-detail/books-detail.component';
import {BooksDeleteComponent} from './books/books-delete/books-delete.component';
import {BooksEditComponent} from './books/books-edit/books-edit.component';






@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksCreateComponent,
    BooksDetailComponent,
    BooksDeleteComponent,
    BooksEditComponent
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
