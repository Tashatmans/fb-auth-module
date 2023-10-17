import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  constructor(private auth: Auth, private router: Router, private message: MessageService) { }

  onSubmit(form: NgForm) {

    const email = form.value.email
    const password = form.value.password

    signInWithEmailAndPassword(this.auth, email, password)
      .then((response) => {
        if(response)
        this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        this.message.error(error.message)
      });

  }
}
