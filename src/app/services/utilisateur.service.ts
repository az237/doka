import { Injectable } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor() { }

  async getCurrentUtilisateur() {
    return new Promise<Utilisateur>((resolve, reject) => {
      firebase.firestore().collection('comptes').doc(firebase.auth().currentUser?.email as string).get().then(
        (docRef) => {
          resolve(docRef.data() as Utilisateur);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
