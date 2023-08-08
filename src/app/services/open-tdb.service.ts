import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category, Categories } from '../models/category.model';
import { Questions } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class OpenTdbService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Categories | null> {
    return this.httpClient.get<Categories>("https://opentdb.com/api_category.php")
    .pipe(
      tap(() => console.log(`Call getCategories`)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }
  
  getQuestions(amount: number, category: number, difficulty:string, type:string): Observable<Questions | null> {

    let url:string = "https://opentdb.com/api.php?amount=" + amount 
    + "&category=" + category
    + "&difficulty=" + difficulty 
    + "&type=" + type;

    return this.httpClient.get<Questions>(url)
    .pipe(
      tap(() => console.log(`Call getQuestions`)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }
  

  
}
