import { Component } from '@angular/core';
import { Auth, deleteUser } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {

  constructor(private auth:Auth,private router:Router,private message:MessageService){}

  deleteAccount(){
    deleteUser(this.auth.currentUser).then(() => {
      this.message.success("Current user deleted!!")
      this.auth.signOut()
    }).catch((error) => {
      this.message.error(error.message)
      this.auth.signOut()
    });
  }

}
