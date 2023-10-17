import { Component } from '@angular/core';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private auth:Auth,private router:Router,private message:MessageService){}

  onSubmit(form:NgForm){

    const email = form.value.email
    
    sendPasswordResetEmail(this.auth, email).then(() => {
      this.message.success("Reset password mail sent!")
      this.router.navigateByUrl("/login")
    }).catch((error) => {
      this.message.error(error.message)
      this.router.navigateByUrl("/login")
    });
  }
}
