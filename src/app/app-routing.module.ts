import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SignupComponent } from './component/Signup/signup.component';



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
  component: DashboardComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

