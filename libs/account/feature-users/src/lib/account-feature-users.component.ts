import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

export class AuthForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
}

@Component({
  selector: 'users-account-feature-users',
  templateUrl: './account-feature-users.component.html',
  styleUrls: ['./account-feature-users.component.scss'],
})
export class AccountFeatureUsersComponent implements OnInit {
  httpClient = inject(HttpClient);
  authclient = inject(AuthService);
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  showFiller = false;

  form = new AuthForm();

  ngOnInit() {
    console.log(this.authclient);
  }

  onSubmit() {
    this.authclient.singIn(this.form.value);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
