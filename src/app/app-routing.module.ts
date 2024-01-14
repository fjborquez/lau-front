import { RouterModule, Routes } from '@angular/router';

import { AddSubpanelComponent } from './add-subpanel/add-subpanel.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SubpanelComponent } from './subpanel/subpanel.component';
import { UserComponent } from './user/user.component';
import { ValidateTokenGuard } from './validate-token.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'subpanel', component: SubpanelComponent, canActivate: [ValidateTokenGuard]},
  {path: 'subpanel/add', component: AddSubpanelComponent, canActivate: [ValidateTokenGuard]},
  {path: 'user', component: UserComponent, canActivate: [ValidateTokenGuard]},
  {path: 'user/add', component: AddUserComponent, canActivate: [ValidateTokenGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
