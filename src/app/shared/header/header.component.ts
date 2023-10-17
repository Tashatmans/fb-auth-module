import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated:boolean = false
  
  user:any

  constructor(private auth:Auth, private router:Router,private message:MessageService){}

  ngOnInit(): void {

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isAuthenticated = true
        this.user= user
      } else {
        this.isAuthenticated = false
        this.router.navigate(["/login"])
      }
    });

  }

  logOut(){
    this.auth.signOut()
  }


}
