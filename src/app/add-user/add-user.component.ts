import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor(private userService: UserService, private router: Router) {}

  create(userForm: NgForm) {
    let body = userForm.value;
    this.userService.add(body).subscribe((_: any) => alert("Saved!"));
  }

  back() {
    this.router.navigate(['/user']);
  }
}
