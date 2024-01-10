import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SubpanelComponent } from './subpanel/subpanel.component';

const routes: Routes = [
  {path: 'subpanel', component: SubpanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
