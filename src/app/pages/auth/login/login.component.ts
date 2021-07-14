import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APPGGAuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'appgg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class APPGGLoginComponent implements OnInit {

  form: FormGroup;
  user: FormControl;
  password: FormControl;

  constructor(private loginSrvc: APPGGAuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.user = new FormControl({ value: '', disabled: false }, Validators.required);
    this.password = new FormControl({ value: '', disabled: false }, Validators.required);
  }

  createForm() {
    this.form = new FormGroup({
      user: this.user,
      password: this.password,
    });
  }

  login(): void {
    const tempBody = {
      user: this.user.value,
      password: this.password.value,
    };
    this.loginSrvc.login(tempBody.user, tempBody.password)
      .subscribe((_data) => {
        console.log('Login correcto:', _data);
      });
  }
}
