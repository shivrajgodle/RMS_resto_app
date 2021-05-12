import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRmsComponent} from './add-rms/add-rms.component';
import {ListRmsComponent} from './list-rms/list-rms.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdateRmsComponent} from './update-rms/update-rms.component';

const routes: Routes = [
  {
    component:AddRmsComponent,
    path:'add'
  },

  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:UpdateRmsComponent,
    path:'update/:id'
  },
  {
    component:ListRmsComponent,
    path:''
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
