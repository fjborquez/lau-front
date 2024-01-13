import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lau-front';

  constructor(private userService: UserService) {}

  showMenu() {
    return this.userService.hasPermission();
  }
}
