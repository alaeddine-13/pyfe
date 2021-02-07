import {Component, Input, OnInit} from '@angular/core';
import {BASE_API, PROJET} from '../../globals/vars';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';
import { ProjetModel, StatutProjetEnum } from 'src/app/models/projet.model';
import { UserRoleEnum } from 'src/app/models/user.model';
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projet-item',
  templateUrl: './projet-item.component.html',
  styleUrls: ['./projet-item.component.css']
})
export class ProjetItemComponent implements OnInit {

  @Input() projet:ProjetModel;
  @Input() showActions: boolean = true;
  user : any;
  etudiantRole: string = UserRoleEnum.ETUDIANT
  enseignantRole: string = UserRoleEnum.PROFESSEUR
  adminRole: string = UserRoleEnum.ADMIN
  valideStatus: string = StatutProjetEnum.VALIDE
  annuleStatus: string = StatutProjetEnum.ANNULE
  faExternalLinkAlt = faExternalLinkAlt;
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser()
  }

  hasSoutenance(){
    return this.projet.projet_soutenanceId
  }

  projetID(){
    return this.projet.projet_id
  }

  valider(){
    this.crudService.post(BASE_API + PROJET + "/valider/" + `${this.projet.projet_id}`, {}).subscribe(
      (data) => {
        this.toastrService.success("Validé")
        this.crudService.reload()
      }, (error) => {
        this.toastrService.error("Operation échouée")
        console.log(error);
      }
    );
    
  }

  annuler(){
    this.crudService.post(BASE_API + PROJET + "/annuler/" + `${this.projet.projet_id}`, {}).subscribe(
      (data) => {
        this.toastrService.info("Annulé")
        this.crudService.reload()
      }, (error) => {
        this.toastrService.error("Operation échouée")
        console.log(error);
      }
    );
  }

}
