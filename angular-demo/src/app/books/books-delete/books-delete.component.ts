import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {Subscription} from 'rxjs';

import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookServiceService} from 'src/app/service/books.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.css']
})
export class BooksDeleteComponent implements OnInit {

  book: Book = {};
  subcription: Subscription;
  message: string;

  constructor(private bookService: BookServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subcription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.detailBook(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.message = 'can not retrieve customer detail. ' + error;
      });
    });
  }

  deleteBook() {
    console.log(this.book.id);
    this.bookService.deleteBook(this.book.id).subscribe(next => {
      this.message = 'Đã xóa sách';
      this.router.navigate(['/list']);
    }, error => {
      this.message = 'Xóa Không Thành Công';
    });
  }
}
