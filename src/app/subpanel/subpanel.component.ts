import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SubpanelService } from '../subpanel.service';

@Component({
  selector: 'app-subpanel',
  templateUrl: './subpanel.component.html',
  styleUrls: ['./subpanel.component.scss'],
})
export class SubpanelComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  constructor(private subpanelService: SubpanelService, private router: Router) { }

  ngOnInit() {
    this.subpanelService.getSubpanels().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<any>(response);
      this.displayedColumns = ['id', 'nombre', 'descripcion', 'ente', 'type', 'grouped_by', 'actions'];
    });
  }

  add() {
    this.router.navigate(['/subpanel/add']);
  }
}
