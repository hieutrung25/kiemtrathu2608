import { Component, OnInit } from '@angular/core';

import {Book} from '../../book';
import {BookServiceService} from '../../service/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private  bookService: BookServiceService) { }

  bookList: Book[];
  quantity: number;

  ngOnInit(): void {
    this.bookService.getAll().subscribe(result => {
      this.bookList = result;
      this.quantity = this.bookList.length;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
