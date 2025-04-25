import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import {  HttpInterceptorFn } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const router = inject(Router);
  
    const token = authService.getToken();
  
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token ?? ''}`),
    });
  
    return next(newReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          router.navigate(['/login']);
        }
        return throwError(() => new Error('Ocorreu um erro, tente novamente'));
      })
    );
  };
  