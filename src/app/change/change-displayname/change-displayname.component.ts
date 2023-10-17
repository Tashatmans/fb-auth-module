import { Component } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-change-displayname',
  templateUrl: './change-displayname.component.html',
  styleUrls: ['./change-displayname.component.css']
})
export class ChangeDisplaynameComponent {

  constructor(private auth:Auth,private router:Router,private message:MessageService){}

  onSubmit(form:NgForm){

    const displayName = form.value.displayName
    
    updateProfile(this.auth.currentUser, {
      displayName: displayName
    }).then(() => {
      this.message.success("Display name Updated!")
      this.router.navigateByUrl("/profile")
    }).catch((error) => {
      this.message.error(error.message)
      this.auth.signOut()
    });
  }

}
