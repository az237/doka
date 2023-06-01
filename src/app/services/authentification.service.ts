import { Injectable } from '@angular/core';
import firebase from "firebase";
import {Utilisateur} from "../../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  signInUser(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async resetPassword(email: string) {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async signUpUser(user: Utilisateur, password: string) {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, password).then(
        () => {
          localStorage.setItem('id', user.email);
          this.saveToDataBase(user).then(
            () => {
              resolve();
            }, (error) => {
              reject(error);
            }
          );
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  isRegister(info: string) {
    return new Promise<Utilisateur>((resolve, reject) => {
      firebase.firestore().collection('comptes').doc(info).get().then(
        (docRef) => {
          resolve(docRef.exists ? docRef.data() as any : null);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  async saveToDataBase(user: Utilisateur) {
    return new Promise<void>((resolve, reject) => {
      firebase.firestore().collection('comptes').doc(user.id).set(Object.assign({}, user)).then(
        () => {
          resolve();
        },
        (error0) => {
          reject(error0);
        }
      );
    });
  }

  async isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  async signOut() {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().signOut().then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
