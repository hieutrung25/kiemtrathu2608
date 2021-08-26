import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../book';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(API_URL);
  }

  public createBook(book: Partial<Book>): Observable<Book> {
    return this.httpClient.post<Book>(API_URL, book);
  }

}
