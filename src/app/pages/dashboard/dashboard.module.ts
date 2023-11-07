import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from '@app/layouts/sidebar/sidebar.component';
import { HomeNavbarComponent } from '@app/layouts/home-navbar/home-navbar.component';
import { PreventInvalidClickDirective } from '@app/services/directives/prevent-invalid-click.directive';
import { UsersTableComponent } from '@app/layouts/users-table/users-table.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    PreventInvalidClickDirective,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarComponent,
    HomeNavbarComponent,
  ],
  exports: [
    PreventInvalidClickDirective,
  ]
})
export class DashboardModule { }
