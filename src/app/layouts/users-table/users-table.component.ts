import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {
  @Input() users: Array<any> = []
  @Input() myProfile: any = {}
  @Output() actionEvent = new EventEmitter<any>();

  buttonAction(user: any, action: string) {
    this.actionEvent.emit({user: user, action: action});
  }
}
