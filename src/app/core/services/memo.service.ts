import {Injectable} from '@angular/core';
import {MemoModel} from '../models';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CoreModule} from '../core.module';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule,
})
export class MemoService {
  private memoUrl = 'api/Memos';

  constructor(
    private http: HttpClient,
  ) {

  }

  getMemos(): Observable<MemoModel[]> {
    return this.http.get<MemoModel[]>(this.memoUrl)
      .pipe(
        catchError(this.handleError('getMemos', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
