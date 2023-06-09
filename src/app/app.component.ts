import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import firebase from "firebase";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Initialize Firebase
      firebase.initializeApp(environment.firebaseConfig);

      // Activation de la persistance de donnée
      firebase.firestore().enablePersistence();
    });
  }
}
