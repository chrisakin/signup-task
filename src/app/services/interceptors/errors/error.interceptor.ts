import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@app/services/http-service';
import { NotificationService } from '@app/services/notifications/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private notificationService: NotificationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403, 502].includes(err.status) && this.authService.userValue) {
                this.authService.logout();
            }
            const error = err.error?.message || err.statusText;
            this.notificationService.showError(error,  'Error')
            this.authService.isLoading = false
            console.error(err);
            return throwError(() => error);
        }))
    }
}