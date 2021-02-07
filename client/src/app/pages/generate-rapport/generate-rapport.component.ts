import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { BASE_API, SESSION } from 'src/app/globals/vars';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate-rapport',
  templateUrl: './generate-rapport.component.html',
  styleUrls: ['./generate-rapport.component.css']
})
export class GenerateRapportComponent implements OnInit {
  id: number
  url: string|null = 'loading'
  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      const id = params.get('id')
      if(id)
        this.id = +id;
      this.getRapport()
    });
  }

 async getRapport(){
    const response = <{url: string}> await this.crudService.getOne(BASE_API + SESSION, `pdf/${this.id}`).toPromise()
    if('url' in response)
      {
        this.url = response.url
        this.toastrService.success("Génération réussie")
      }
    else{
      this.url = null
      this.toastrService.error('Erreur lors de la génération du rapport')
    }
  }

}
