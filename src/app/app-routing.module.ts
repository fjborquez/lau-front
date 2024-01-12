import { RouterModule, Routes } from '@angular/router';

import { AddSubpanelComponent } from './add-subpanel/add-subpanel.component';
import { NgModule } from '@angular/core';
import { SubpanelComponent } from './subpanel/subpanel.component';

const routes: Routes = [
  {path: 'subpanel', component: SubpanelComponent},
  {path: 'subpanel/add', component: AddSubpanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
