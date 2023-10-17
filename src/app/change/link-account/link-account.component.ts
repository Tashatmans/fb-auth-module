import { Component, OnInit } from '@angular/core';
import { Auth, FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, PhoneAuthProvider, TwitterAuthProvider, getRedirectResult, linkWithCredential, linkWithPhoneNumber, linkWithPopup, onAuthStateChanged, signInWithCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-link-account',
  templateUrl: './link-account.component.html',
  styleUrls: ['./link-account.component.css']
})
export class LinkAccountComponent implements OnInit{

  user: any

  constructor(private auth: Auth, private router: Router, private message: MessageService) { }

  ngOnInit(): void {

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user
      } else {
        this.router.navigate(["/login"])
      }
    });
  }

  logOut() {
    this.auth.signOut()
  }

  linkProvider(providerName: string) {
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
    }

    linkWithPopup(this.user, provider).then((result) => {
      let credential
      switch (providerName) {
        case "google":
          console.log(result)
          credential = GoogleAuthProvider.credentialFromResult(result);
          break;
        case "facebook":
          credential = FacebookAuthProvider.credentialFromResult(result);
          break;
        case "twitter":
          credential = TwitterAuthProvider.credentialFromResult(result);
          break;
      }

      linkWithCredential(this.user, credential)
        .then((response) => {
          if(response)
          this.router.navigateByUrl('/profile');
        })
        .catch((error) => {
          this.message.error(error.message)
        });
    }).catch((error) => {
      if (error.message == "Firebase: Error (auth/credential-already-in-use).") {
        this.message.error("Account already in use!!")
      }
      console.log(error.message)
    })
  }

}
