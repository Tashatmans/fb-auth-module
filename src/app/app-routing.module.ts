import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { SigninComponent } from './signin/signin.component';
import { PasswordComponent } from './signin/password/password.component';
import { PhoneComponent } from './signin/phone/phone.component';
import { ChangeEmailComponent } from './change/change-email/change-email.component';
import { ChangePasswordComponent } from './change/change-password/change-password.component';
import { ChangeDisplaynameComponent } from './change/change-displayname/change-displayname.component';
import { ChangePhotoComponent } from './change/change-photo/change-photo.component';
import { DeleteAccountComponent } from './change/delete-account/delete-account.component';
import { LinkAccountComponent } from './change/link-account/link-account.component';
import { LinkPasswordComponent } from './change/link-password/link-password.component';
import { LinkPhoneComponent } from './change/link-phone/link-phone.component';
import { AuthGuard } from './services/auth.guard';
import { SignupPasswordComponent } from './signup-password/signup-password.component';
import { VerifyEmailComponent } from './verify/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './signin/forgot-password/forgot-password.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login", component:SigninComponent,children:[
    {path:"", redirectTo:"password", pathMatch:"full"},
    {path:"password", component:PasswordComponent},
    {path:"phone", component:PhoneComponent},
    {path:"forgot-password",component:ForgotPasswordComponent}
  ]},
  {path:"profile", component:ProfileComponent, children:[
    {path:"", redirectTo:"detail", pathMatch:"full"},
    {path:"detail", component:ProfileDetailComponent},
    {path:"change-email", component:ChangeEmailComponent},
    {path:"change-password", component:ChangePasswordComponent},
    {path:"change-name", component:ChangeDisplaynameComponent},
    {path:"change-photo", component:ChangePhotoComponent},
    {path:"link-account", component:LinkAccountComponent},
    {path:"link-password", component:LinkPasswordComponent},
    {path:"link-phone", component:LinkPhoneComponent},
    {path:"verify-email", component:VerifyEmailComponent},
    {path:"delete-account", component:DeleteAccountComponent},
  ],canActivate:[AuthGuard]},
  {path:"register", component:SignupPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
