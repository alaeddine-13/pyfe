import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BASE_API, USER, PROJET} from "../../globals/vars";
import {CrudService} from '../../services/crud.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  id: number;
  user: UserModel;
  projets: any;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.user = new UserModel();
    this.getUser();
    this.projets = {};
    this.getProjets()
  }

  getUser() {
    this.crudService.getAll(BASE_API + USER + '/' + this.id).subscribe(
      // @ts-ignore
      (data: UserModel) => {
        this.user = data;
        console.log(this.user);
      }, (error) => {
        console.log(error);
      }
    );
  }

  getProjets() {
    this.projets = [{
      "projet_id": 1,
      "sujet": "projet errojla",
      "entreprise": "raszebi CORP",
      "statut": "en cours",
      "projet_etudiantId": 1,
      "projet_encadrantId": 2,
      "projet_soutenanceId": 1,
      "nom_encadrant": "Alaeddine",
      "prenom_encadrant": "Abdessalem",
      "nom_etudiant": "Alaeddine",
      "prenom_etudiant": "Abdessalem",
      "rapport": "rapporeddine",
      "salle": "36Ba",
      "date": "2020-01-30T23:00:00.000Z"
    }];
    // TODO: get projet from backend end-point /projet/byUser/id
    /*this.crudService.getAll(BASE_API + PROJET + '/byUser/' + this.id).subscribe(
      // @ts-ignore
      (data: UserModel) => {
        this.projets = data;
        console.log(this.projets);
      }, (error) => {
        console.log(error);
      }
    );*/
  }

}
