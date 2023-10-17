import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-password',
  templateUrl: './signup-password.component.html',
  styleUrls: ['./signup-password.component.css']
})
export class SignupPasswordComponent {

  constructor(private auth: Auth, private router: Router, private message: MessageService) { }

  onSubmit(form: NgForm) {

    if (!form.value.agreement) {
      this.message.error("User agreement must be approved!!")
      return
    }

    let email
    let password

    if (form.value.password == form.value.passwordMatch) {
      email = form.value.email
      password = form.value.password
    } else {
      this.message.error("Password mismatch!!")
      return
    }

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((response) => {
        if (response)
          this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        this.message.error(error.message)
      });

  }
}
