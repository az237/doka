import {ToolsService} from "../app/services/tools.service";

export class Utilisateur {
  photo = '';
  date: string;
  id: string;
  idCountry: string;
  language: string;
  userName: string;
  phone: string;

  constructor(public pseudo: string, public email: string, public status: number, public role: string, public typeInscription: string) {
    const gid = new ToolsService();
    this.id = gid.generateId(23);
    this.date = new Date().toString();
    this.idCountry = '';
    this.language = '';
    this.userName = '';
    this.phone = '';
  }
}
