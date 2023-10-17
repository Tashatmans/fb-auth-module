import { Component } from '@angular/core';
import { Auth, EmailAuthProvider, linkWithCredential } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-link-password',
  templateUrl: './link-password.component.html',
  styleUrls: ['./link-password.component.css']
})
export class LinkPasswordComponent {


  constructor(private auth: Auth, private router: Router, private message: MessageService) { }


  phoneNumber: any;
  reCaptchaResult!: any;
  otp!: string;
  verify: any;

  onSubmit(form: NgForm) {

    const email = form.value.email
    const password = form.value.password

    const credential = EmailAuthProvider.credential(email, password);

    linkWithCredential(this.auth.currentUser,credential)
    .then((response) => {
      localStorage.setItem('user_data', JSON.stringify(response));
      this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        this.message.error(error.message)
      });

  }

}
