import { Component, inject } from '@angular/core';
import { LoginData } from './login';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/http-service';
import { NotificationService } from '@app/services/notifications/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  private router = inject(Router);
  public authService = inject(AuthService)
  private notifyService = inject(NotificationService)
  loginData: LoginData = new LoginData;
  isLoading: boolean = false


  loginUser() {
   if(this.loginData.tempKey) {
    this.authService.isLoading = true
   this.authService.login(this.loginData).subscribe((data: any) => {
      if(data.token && data.adminId) {
        this.authService.isLoading = false
      this.notifyService.showSuccess("Successfully loggedin", "")
      this.router.navigate(['/dashboard/home'])
      }
    })
   }
  }
}
