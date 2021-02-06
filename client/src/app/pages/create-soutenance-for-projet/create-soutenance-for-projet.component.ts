import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { BASE_API, PROJET } from 'src/app/globals/vars';
import { ProjetModel } from 'src/app/models/projet.model';

@Component({
  selector: 'app-create-soutenance-for-projet',
  templateUrl: './create-soutenance-for-projet.component.html',
  styleUrls: ['./create-soutenance-for-projet.component.css']
})
export class CreateSoutenanceForProjetComponent implements OnInit {
  id: string;
  projet: ProjetModel;
  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.crudService.getOne(BASE_API + PROJET + "/formatted", this.id).subscribe(
      // @ts-ignore
      (data: ProjetModel) => {
        this.projet = data;
      }, (error: any) => {
        console.log(error);
      }
    );
  }

    
}
