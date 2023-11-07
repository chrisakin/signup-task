import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthButtonComponent } from '@app/components/auth-button/auth-button.component';
import { LoadingIconComponent } from '@app/components/loading-icon/loading-icon.component';
import { PasswordToggleComponent } from '@app/components/password-toggle/password-toggle.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    LoadingIconComponent,
    AuthButtonComponent,
    PasswordToggleComponent,
  ]
})
export class AuthModule { }
