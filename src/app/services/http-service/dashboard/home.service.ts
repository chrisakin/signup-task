import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/services/models/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private statsSubject: BehaviorSubject<User | null>;
    public stats: Observable<User | null>;
    public isLoading: boolean = false

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.statsSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.stats = this.statsSubject.asObservable();
    }

    public get UserValue() {
        return this.statsSubject.value;
    }

    getAllUsers() {
      return this.http.get<User>(`${environment.apiUrl}/admin/all-users`)
        .pipe(map(stats => {
          return stats.data;
      }));
    }

    updateUser(data: any) {
      return this.http.put<User>(`${environment.apiUrl}/admin/update-users`, data)
        .pipe(map(stats => {
          return stats.data;
      }));
    }

    removeUser() {
      return this.http.delete<User>(`${environment.apiUrl}/admin/delete-users`)
        .pipe(map(stats => {
          return stats.data;
      }));
    }

    approveUser() {
      return this.http.put<User>(`${environment.apiUrl}/admin/approve-users`, {status: 'approved'})
        .pipe(map(stats => {
          return stats.data;
      }));
    }
}
