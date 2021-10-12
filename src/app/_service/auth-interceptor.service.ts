import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { DataStorageService } from './data-storage.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private dataStorageService: DataStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.dataStorageService.employee.pipe(
      exhaustMap(() => {
        const modifiedReq = req.clone({
          params: new HttpParams().set('abc', 'abc'),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}