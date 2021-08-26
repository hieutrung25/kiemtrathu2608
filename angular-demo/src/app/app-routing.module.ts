import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books/books-list/books-list.component';
import {BooksCreateComponent} from './books/books-create/books-create.component';
import {BooksDetailComponent} from './books/books-detail/books-detail.component';
import { BooksDeleteComponent } from './books/books-delete/books-delete.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';





const routes: Routes = [{
  path: 'list',
  component: BooksListComponent
}, {
  path: 'create',
  component: BooksCreateComponent
}, {
    path: 'detail/:id',
    component: BooksDetailComponent
}, {
  path: 'delete/:id',
  component: BooksDeleteComponent
}, {
  path: 'edit/:id',
  component: BooksEditComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
