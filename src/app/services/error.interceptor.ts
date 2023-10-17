import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private message: MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(

      catchError((response: HttpErrorResponse) => {
        let message = ""


        if (response.error) {
          if (response.status == 401) {
            message = "You are'nt authorized"
            return throwError(() => {
              new Error(message)
              this.message.error(message)
            })
          }
        }

        if (response.error) {
          if (response.status == 400) {
            message = "There is no user record corresponding to this identifier. The user may have been deleted."
            return throwError(() => {
              new Error(message)
              this.message.error(message)
            })
          }
        }

        return throwError(() => {
          new Error(message)
          this.message.error(message)
        })
      }))

  }
}
