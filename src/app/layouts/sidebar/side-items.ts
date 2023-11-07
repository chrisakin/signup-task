import { Injectable } from "@angular/core";

const sideItemsData = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        url: '/dashboard/home',
        icon: 'dashboard-icon',
        hasQuery: true,
        isActive: false,
        urlRoutes: '/dashboard/home' as any,
      },
]

@Injectable({ providedIn: 'root' })
export class sideItems {
    public get() {
      return sideItemsData;
    }
  }