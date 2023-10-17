import { Component, OnInit } from '@angular/core';
import { Auth, FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, TwitterAuthProvider, signInWithCredential, signInWithPopup } from '@angular/fire/auth';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: Auth, private router: Router, private message: MessageService) { }
  ngOnInit(): void {
   if(!!this.auth.currentUser)
   this.router.navigateByUrl("/profile")
  }

  onSubmit(providerName: string) {
    let provider
    switch (providerName) {
      case "google":
        provider = new GoogleAuthProvider()
        break;
      case "facebook":
        provider = new FacebookAuthProvider()
        break;
      case "twitter":
        provider = new TwitterAuthProvider()
        break;
      case "apple":
        provider = new OAuthProvider('apple.com')
        break;
    }
    signInWithPopup(this.auth, provider).then((result) => {
      let credential
      switch (providerName) {
        case "google":
           credential = GoogleAuthProvider.credentialFromResult(result);
          break;
        case "facebook":
          credential = FacebookAuthProvider.credentialFromResult(result);
          break;
        case "twitter":
          credential = TwitterAuthProvider.credentialFromResult(result);
          break;
        case "apple":
          credential = OAuthProvider.credentialFromResult(result);
          break;
      }

      signInWithCredential(this.auth,credential)
      .then((response) => {
        this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        this.message.error(error.message)
      });
    }).catch((error)=>{
      this.message.error(error.message)
    })
  }

}
