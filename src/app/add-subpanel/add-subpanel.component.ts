import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SubpanelService } from '../subpanel.service';

@Component({
  selector: 'app-add-subpanel',
  templateUrl: './add-subpanel.component.html',
  styleUrls: ['./add-subpanel.component.scss']
})
export class AddSubpanelComponent {

  public constructor(private subpanelService: SubpanelService, private router: Router) { }

  create(form: NgForm) {
    this.subpanelService.addSubpanels({
      nombre: form.value.name,
      descripcion: form.value.description,
      ente: form.value.entity,
      type: form.value.type,
      url: form.value.url,
      grouped_by: form.value.grouped_by,
    }).subscribe((_: any) => alert('Saved!'));
  }

  back() {
    this.router.navigate(['/subpanel']);
  }
}
