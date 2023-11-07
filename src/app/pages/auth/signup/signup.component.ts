import { Component, inject } from '@angular/core';
import { SignupData } from './signup';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/services/http-service';
import { NotificationService } from '@app/services/notifications/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public authService = inject(AuthService)
  private notifyService = inject(NotificationService)
  signupData: SignupData = new SignupData;
  passwordType: string = 'password'
  confirmPasswordType: string = 'password'
  passwordToggleState: boolean = false
  confirmPasswordToggleState: boolean = false
  isLoading: boolean = false
  isDisabled: boolean = true
  readTermsToggle: boolean = false


  validate() {
    let firstNameReturnValue: boolean = false
    let lasttNameReturnValue: boolean = false
    let phoneNumberReturnValue: boolean = false
    let emailReturnValue: boolean = false
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (this.signupData.firstName) {
      firstNameReturnValue = true
    } else {
      this.notifyService.showError('First Name is not entered', 'Error');
    }
    if (this.signupData.lastName) {
      lasttNameReturnValue = true
    } else {
      this.notifyService.showError('Last Name is not entered', 'Error');
    }
    if (this.signupData.email && pattern.test(this.signupData.email)) {
      emailReturnValue = true
    } else {
      this.notifyService.showError('Email has wrong value', 'Error');
    }
    if (this.signupData.phoneNumber) {
      phoneNumberReturnValue = true
    } else {
      this.notifyService.showError('Phone Number is not entered', 'Error');
    }
    return true ? firstNameReturnValue == true
    && lasttNameReturnValue == true && emailReturnValue == true
    && phoneNumberReturnValue == true : false
  }

  signUp() {
    if(this.validate()) {
      const data = {
        email: this.signupData.email,
        firstName: this.signupData.firstName,
        lastName: this.signupData.lastName,
        phoneNumber: this.signupData.phoneNumber,
      }
      this.isLoading = true
      this.authService.signup(data).subscribe((data: any) => {
        if(data.adminId) {
        this.authService.isLoading = false
        this.notifyService.showSuccess("Successfully created user", "")
        }
      })
     }
  }

}
