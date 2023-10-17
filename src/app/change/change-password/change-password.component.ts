import { Component } from '@angular/core';
import { Auth, updatePassword } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private auth:Auth,private router:Router,private message:MessageService){}

  onSubmit(form:NgForm){

    let newPassword

   if(form.value.password == form.value.passwordMatch){
    newPassword = form.value.password
   }else{
    this.message.error("Password mismatch!!")
    return
   }
    
    updatePassword(this.auth.currentUser, newPassword).then(() => {
      this.message.success("Password Changed!")
      this.auth.signOut()
      this.router.navigateByUrl("/profile")
    }).catch((error) => {
      this.message.error(error.message)
      this.auth.signOut()

    });
  }

}
