import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplayComponent } from './component/display/display.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { GetallnoteComponent } from './component/getallnote/getallnote.component';
import { LoginComponent } from './component/login/login.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SignupComponent } from './component/Signup/signup.component';
import { TrashComponent } from './component/trash/trash.component';



const routes: Routes = [
 {
   path: "",
   redirectTo: "login",
   pathMatch: "full"
 },
  {
    path: 'signup',
    component : SignupComponent

  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetPasswordComponent
  },
 {
   path: 'forgot',
   component: ForgetPasswordComponent
 },
{
  path: 'dashboard',
  component: DashboardComponent,


  children:[
    {
      path:'all',
      component: GetallnoteComponent,
    },
    {
      path:'trash',
      component: TrashComponent,
    }

  ]
},
  {
    path: 'display',
    component: DisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

