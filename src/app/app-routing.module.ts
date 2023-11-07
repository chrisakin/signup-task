import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './pages/auth/auth.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { authGuard } from './services/guards';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  { path: '', loadChildren: () => AuthModule },
  { path: 'dashboard', loadChildren: () => DashboardModule, 
  canActivate: [authGuard] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
