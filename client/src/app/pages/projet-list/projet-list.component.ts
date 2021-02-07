import { Component, OnInit } from '@angular/core';
import { ProjetModel } from 'src/app/models/projet.model';
import { CrudService } from 'src/app/services/crud.service';
import { BASE_API, PROJET } from 'src/app/globals/vars';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {
  projets: ProjetModel[] = []
  columns: [string, string][] = [['sujet', 'Sujet'], ['entreprise', 'Entreprise'], ['statut', 'Statut']]
  linkColumns: [string, string, (id: any) => string][] = [
    ['projet_etudiantId', 'Etudiant', (id)=>`/user/${id}`],
    ['projet_encadrantId', 'Encadrant', (id)=>`/user/${id}`],
    ['projet_id', 'Page projet', (id)=> `/projet/${id}`]
  ]
  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.getProjet()
  }

  async getProjet(){
    this.projets = <ProjetModel[]> await this.crudService.getAll(BASE_API + PROJET).toPromise()
  }

}
