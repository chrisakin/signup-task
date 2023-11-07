import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent {
  newDate: string =  new Date().toLocaleDateString('en-US', {day: 'numeric', month: 'long',  year: 'numeric', })
  newTime: string =  new Date().toLocaleTimeString('en-US', { hour: "numeric", minute: "2-digit" })
}
