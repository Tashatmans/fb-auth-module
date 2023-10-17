import { Component } from '@angular/core';
import { Auth, reauthenticateWithCredential, updateEmail, verifyBeforeUpdateEmail } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent {

  constructor(private auth:Auth,private router:Router,private message:MessageService){}

  onSubmit(form:NgForm){

    const email = form.value.email
    
    verifyBeforeUpdateEmail(this.auth.currentUser, email).then(() => {
      this.message.success("Verification mail sent to new email!")
      this.router.navigateByUrl("/profile")
    }).catch((error) => {
      this.message.error(error.message)
      this.auth.signOut()
    });
  }

}