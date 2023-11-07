import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/services/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    public isLoading: boolean = false

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(data: any) {
        return this.http.post<User>(`${environment.apiUrl}/admin/login`, data)
            .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user.data;
            }));
    }

    signup(user: object) {
        return this.http.post<User>(`${environment.apiUrl}/admin/signup`, user)
            .pipe(map(user => {
                return user.data;
            }));
    }
    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}