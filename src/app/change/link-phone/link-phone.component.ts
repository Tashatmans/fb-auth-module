import { Component, OnInit } from '@angular/core';
import { Auth, OAuthProvider, PhoneAuthCredential, PhoneAuthProvider, RecaptchaVerifier, linkWithCredential, linkWithPhoneNumber, onAuthStateChanged, signInWithCredential, signInWithPhoneNumber } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-link-phone',
  templateUrl: './link-phone.component.html',
  styleUrls: ['./link-phone.component.css']
})
export class LinkPhoneComponent implements OnInit{

  user: any

  constructor(private auth: Auth, private router: Router, private message: MessageService) { }

  ngOnInit(): void {

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user
      } else {
        this.router.navigate(["/login"])
      }
    });
  }

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

    linkWithCredential(this.user, credential)
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
