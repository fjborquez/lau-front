import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.list().subscribe((response:any) => {
      this.dataSource = new MatTableDataSource(response);
      this.displayedColumns = ['id', 'name', 'email', 'role', 'actions']
    });
  }

  add() {
    this.router.navigate(['user/add']);
  }

  delete(id: number) {
    this.userService.delete(id).subscribe((_: any) => alert('deleted!'));
  }
}
