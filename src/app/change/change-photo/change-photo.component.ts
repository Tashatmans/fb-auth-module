import { Component } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.component.html',
  styleUrls: ['./change-photo.component.css']
})
export class ChangePhotoComponent {

  constructor(private auth:Auth,private router:Router,private message:MessageService){}

  onSubmit(form:NgForm){

    const photoURL = form.value.photoUrl
    
    updateProfile(this.auth.currentUser, {
      displayName: this.auth.currentUser.displayName,photoURL:photoURL
    }).then(() => {
      this.message.success("Profile Photo Updated!")
      this.router.navigateByUrl("/profile")
    }).catch((error) => {
      this.message.error(error.message)
      this.auth.signOut()
    });
  }

}
