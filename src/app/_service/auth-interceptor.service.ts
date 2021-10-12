import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { DataStorageService } from './data-storage.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private dataStorageService: DataStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("this is intercepter.");
    return next.handle(req);
  }
}