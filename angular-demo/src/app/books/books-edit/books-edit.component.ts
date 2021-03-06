import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {Subscription} from 'rxjs';

import {ActivatedRoute, ParamMap} from '@angular/router';
import { BookServiceService } from 'src/app/service/books.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
  successMessage: string;
  failMessage: string;
  book: Book = {};
  sub: Subscription;
  constructor(private bookService: BookServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.detailBook(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.failMessage = error;
      });
    });
  }

  updateBook(bookForm) {
    this.bookService.editBook(bookForm.value, this.book.id).subscribe(() => {
      this.successMessage = 'Cập nhật thành công';
    }, () => {
      this.failMessage = 'Cập nhật thất bại';
    });
  }
}
