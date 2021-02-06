import {InvalidDataException} from '../globals/exceptions';



export class ProjetModel {
  projet_id: string | null | undefined;
  sujet: string | null | undefined;
  entreprise: string | null | undefined;
  statut: string | null | undefined;
  projet_etudiantId: string | null | undefined;
  projet_encadrantId: string | null | undefined;
  projet_soutenanceId: string | null | undefined;
  nom_encadrant: string | null | undefined;
  prenom_encadrant: string | null | undefined;
  nom_etudiant: string | null | undefined;
  prenom_etudiant: string | null | undefined;
  rapport: string | null | undefined;
  salle: string | null | undefined;
  date: string | null | undefined;


  constructor(
    projet_id?: string , 
    sujet?: string , 
    entreprise?: string , 
    statut?: string , 
    projet_etudiantId?: string , 
    projet_encadrantId?: string , 
    projet_soutenanceId?: string , 
    nom_encadrant?: string , 
    prenom_encadrant?: string , 
    nom_etudiant?: string , 
    prenom_etudiant?: string , 
    rapport?: string , 
    salle?: string , 
    date?: string 
) {
    this.projet_id = projet_id
    this.sujet = sujet
    this.entreprise = entreprise
    this.statut = statut
    this.projet_etudiantId = projet_etudiantId
    this.projet_encadrantId = projet_encadrantId
    this.projet_soutenanceId = projet_soutenanceId
    this.nom_encadrant = nom_encadrant
    this.prenom_encadrant = prenom_encadrant
    this.nom_etudiant = nom_etudiant
    this.prenom_etudiant = prenom_etudiant
    this.rapport = rapport
    this.salle = salle
    this.date = date
  }
}
