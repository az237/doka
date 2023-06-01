import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {ApiService} from "../services/api.service";
import {ToolsService} from "../services/tools.service";
import {Utilisateur} from "../../models/utilisateur";
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {AlertService} from "../services/alert.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  imgFile!: any;
  isLoading = false;
  uploadForm = this.formBuilder.group({
    file: ['']
  });
  extensionFile = '';

  constructor(private alertService: AlertService, private router: Router, private authService: AuthentificationService, private apiService: ApiService, private formBuilder: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onImageChange(e: any) {
    const reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
      this.extensionFile = file.name.split('.').pop();

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          //imgSrc: reader.result
        });
      };
    }
  }

  inscription(form: any) {
    const user: Utilisateur = new Utilisateur(form.value.pseudo.toLocaleLowerCase(), form.value.email.toLocaleLowerCase(), 1, '', 'email');
    this.apiService.addImageForAdresseId( user.id.toString() , 'images/', this.imgFile ? this.sanitizer.bypassSecurityTrustResourceUrl(this.imgFile).toString() : '', this.extensionFile).then(
      (docRef: string) => {
        this.authService.signUpUser(user, form.value.password).then(
          () => {
            this.router.navigateByUrl('home');
          },
          (error) => {
            this.isLoading = false;
            this.alertService.print(error);
          }
        );
      });
  }
}
