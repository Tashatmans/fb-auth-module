import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private auth:Auth,private router:Router){

}
ngOnInit(): void {
  onAuthStateChanged(this.auth, (user) => {
    if (user) {
      this.router.navigate(["/profile"])
    } else {
      this.router.navigate(["/login"])
    }
  });
    }

}
