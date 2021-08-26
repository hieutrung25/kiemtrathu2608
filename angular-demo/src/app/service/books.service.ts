import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private  httpClient: HttpClient) { }

  public getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL);
  }

  public createBook(book: Partial<Book>): Observable<Book> {
    return this.httpClient.post<Book>('http://localhost:3000/books', book);
  }

}
