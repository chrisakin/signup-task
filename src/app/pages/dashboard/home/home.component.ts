import { Component, inject, OnInit } from '@angular/core';
import { AuthService, HomeService } from '@app/services/http-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public dashboardService = inject(HomeService)
  public authService = inject(AuthService)
  users: Array<any> = []
  myProfile: any = {}
  user: any = {}
  ngOnInit() {
    this.myProfile = this.authService.userValue
    this.getAllUsers()
  }

  getAllUsers() {
    this.dashboardService.getAllUsers().subscribe((data: any) => {
      if(data) {
       this.users = data
      }
    })
  }

  updateUser(data: any) {
    this.dashboardService.updateUser(data).subscribe((data: any) => {
      if(data) {
       this.getAllUsers()
      }
    })
  }

  removeUser() {
    this.dashboardService.removeUser().subscribe((data: any) => {
      if(data) {
       this.getAllUsers()
      }
    })
  }

  approveUser() {
    this.dashboardService.approveUser().subscribe((data: any) => {
      if(data) {
       this.getAllUsers()
      }
    })
  }

  action(value: any) {
    if(value.action == 'approve') {
      this.approveUser()
    }
    if(value.action == 'update') {
      this.updateUser(value.user)
    }
    if(value.action == 'delete') {
      this.removeUser()
    }
  }
}
