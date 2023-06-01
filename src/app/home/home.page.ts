import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {UtilisateurService} from "../services/utilisateur.service";
import {Utilisateur} from "../../models/utilisateur";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentUser!: Utilisateur;

  constructor(private router: Router,  private alertController: AlertController, private authService: AuthentificationService, private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.utilisateurService.getCurrentUtilisateur().then(
      (data) => {
        this.currentUser = data;
      }
    );
  }

  async logOut() {
    const alert = await this.alertController.create({
      header: 'Vous êtes sur le point d\'être déconnecté',
      message: 'Voulez-vous vraiment clore cette session ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'OK',
          handler: () => {
            this.authService.signOut().then();
            localStorage.clear();
            this.router.navigateByUrl('ask-login-register');
          }
        }
      ]
    });
    await alert.present();
  }
}
