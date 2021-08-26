import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../../service/books.service';


@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit {
  successMessage: string;
  failMessage: string;

  constructor(private blogService: BookServiceService,) {
  }

  ngOnInit(): void {
  }

  addBook(bookForm) {
    console.log(bookForm.value);
    this.blogService.createBook(bookForm.value).subscribe(() => {
      this.successMessage = 'Tạo mới thành Công';
    }, () => {
      this.failMessage = 'Tạo mới thất bại';
    });
  }

}
