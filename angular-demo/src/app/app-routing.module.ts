import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books/books-list/books-list.component';
import {BooksCreateComponent} from './books/books-create/books-create.component';



const routes: Routes = [{
  path: 'list',
  component: BooksListComponent
}, {
  path: 'create',
  component: BooksCreateComponent
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
