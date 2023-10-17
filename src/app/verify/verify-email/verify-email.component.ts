import { Component, OnInit } from '@angular/core';
import { Auth, sendEmailVerification } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private auth:Auth,private router:Router,private message:MessageService){}
  ngOnInit(): void {
    if(this.auth.currentUser.emailVerified){
      this.message.warning("Your email verifed!")
      this.router.navigateByUrl("/profile")
    }

  }

  sendVerificationMail() {
    sendEmailVerification(this.auth.currentUser).then(() => {
      this.message.success("Verification mail sent to email!")
      this.router.navigateByUrl("/profile")
    }).catch((error) => {
      this.message.error(error.message)
      this.auth.signOut()
    });
  }

}
