import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-toggle.component.html',
  styleUrls: ['./password-toggle.component.css']
})
export class PasswordToggleComponent {
  @Input() show : boolean = false
}
