import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {Subscription} from 'rxjs';

import {ActivatedRoute, ParamMap} from '@angular/router';
import { BookServiceService } from 'src/app/service/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  book: Book = {} ;
  sub: Subscription;

  constructor(private bookService: BookServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.detailBook(id).subscribe(next => {
        this.book = next;
      }, error => {
        console.log(error);
      });
    });
  }
}
