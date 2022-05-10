import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './components/login/login.component';
import { SingupComponent }      from './components/singup/singup.component';
import { DeviceComponent }     from './components/device/device.component';
import { CategoryComponent }     from './components/category/category.component';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'devices', component: DeviceComponent, canActivate: [AuthGuardService] },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuardService] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
