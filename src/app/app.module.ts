import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { SignupPasswordComponent } from './signup-password/signup-password.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { PasswordComponent } from './signin/password/password.component';
import { PhoneComponent } from './signin/phone/phone.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { ChangeEmailComponent } from './change/change-email/change-email.component';
import { ChangePasswordComponent } from './change/change-password/change-password.component';
import { ChangeDisplaynameComponent } from './change/change-displayname/change-displayname.component';
import { ChangePhotoComponent } from './change/change-photo/change-photo.component';
import { DeleteAccountComponent } from './change/delete-account/delete-account.component';
import { VerifyEmailComponent } from './verify/verify-email/verify-email.component';
import { VerifyPhoneComponent } from './verify/verify-phone/verify-phone.component';
import { LinkAccountComponent } from './change/link-account/link-account.component';
import { LinkPhoneComponent } from './change/link-phone/link-phone.component';
import { LinkPasswordComponent } from './change/link-password/link-password.component';
import { ForgotPasswordComponent } from './signin/forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileDetailComponent,
    SignupPasswordComponent,
    HeaderComponent,
    PasswordComponent,
    PhoneComponent,
    SigninComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    ChangeDisplaynameComponent,
    ChangePhotoComponent,
    DeleteAccountComponent,
    VerifyEmailComponent,
    VerifyPhoneComponent,
    LinkAccountComponent,
    LinkPhoneComponent,
    LinkPasswordComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
