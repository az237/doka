import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {AlertService} from "../services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoading = false;

  constructor(private router: Router, private authService: AuthentificationService, private alertService: AlertService) { }

  ngOnInit() {
  }

  connexion(form: any) {
    this.isLoading = true;
    this.authService.signInUser(form.value.email, form.value.password).then(
      () => {
        this.router.navigateByUrl('home');
      },
      (error) => {
        this.isLoading = false;
        this.alertService.print(error);
      }
    );
  }

}
