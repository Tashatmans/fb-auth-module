import { Component } from '@angular/core';
import { Auth, PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {

  constructor(private auth: Auth, private router: Router, private message: MessageService) { }


  phoneNumber: any;
  reCaptchaResult!: any;
  otp!: string;
  verify: any;

  getOTP() {

    this.reCaptchaVerifier()
    signInWithPhoneNumber(this.auth, this.phoneNumber, this.reCaptchaResult)


      .then((confirmationResult) => {

        this.verify = confirmationResult.verificationId

      })
      .catch((error) => {
        this.message.error(error.message)
      });
  }

  handleClick() {
    console.log(this.otp);
    var credential = PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    console.log(this.auth.currentUser!)

    signInWithCredential(this.auth, credential)
      .then((response) => {
        if(response)
        this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        this.message.error(error.message)
      });
  }

  reCaptchaVerifier(){
    this.reCaptchaResult = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',

      },
      this.auth
    );
  }

}
