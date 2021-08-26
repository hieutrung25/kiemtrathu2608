import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './books/books-list/books-list.component';
import {BookCreateComponent} from './books/books-create/books-create.component';



const routes: Routes = [{
  path: 'list-book',
  component: BookListComponent
}, {
  path: 'create-book',
  component: BookCreateComponent
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
