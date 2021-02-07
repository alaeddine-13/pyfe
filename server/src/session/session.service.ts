import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {SessionEntity} from "./entities/session.entity";
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import {AnneeEntity} from "../annee/entities/annee.entity";
import {PdfService} from "../pdf/pdf.service";
import * as moment from 'moment';
import { FileUploadService } from 'src/file-upload/file-upload.service';

@Injectable()
export class SessionService {
  constructor(
      @InjectRepository(SessionEntity)
      private sessionRepository: Repository<SessionEntity>,
      private pdfService: PdfService,
      private fileUploadService: FileUploadService
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    const annee = this.sessionRepository.create(createSessionDto);
    await this.sessionRepository.save(createSessionDto);
    return annee;
  }

  async findAll() {
    return this.sessionRepository.find();
  }

  async findById(id: number) {
    return await this.sessionRepository.findOne({ id });
  }

  async update(id: number, updateSessionDto: UpdateSessionDto) {
    await this.sessionRepository.update({ id }, updateSessionDto);
    return await this.sessionRepository.findOne({ id });
  }

  async remove(id: number) {
    await this.sessionRepository.delete({ id });
    return { deleted: true };
  }

  async findAllFormatted() {

    const query = this.sessionRepository
        .createQueryBuilder('session')
        .addSelect('session.president', 'president')
        .addSelect('annee.annee', 'annee')
        .addSelect('session.nom', 'nom')
        .innerJoin('session.annee', 'annee')
    console.log(query.getSql())
    return await query.getRawMany()
  }

  formatResults(rows){
    let groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    // Changes SQL join result to a JSON representation of the pages
    rows = rows.map(row => { return { ...row, time: moment(row.date).format("hh:mm"), date: moment(row.date).format("DD-MM-YYYY")}});

    let bySalles = groupBy(rows, 'salle');


    Object.keys(bySalles).map(function(key, index) {
      bySalles[key] = groupBy(bySalles[key],'date');
      Object.keys(bySalles[key]).map(function(key2, index2){
        bySalles[key][key2] = groupBy(bySalles[key][key2], 'filiere');
      })
    });

    let res = [];

    for (const salle of Object.keys(bySalles)){
      const dates = Object.keys(bySalles[salle]);
      for(const date of dates){
        const filieres = Object.keys(bySalles[salle][date]);
        for(const filiere of filieres){
          const page = bySalles[salle][date][filiere];
          res.push({
            nom_session: page[0].nom_session,
            salle: salle,
            president_jury: page[0].president,
            filiere: filiere,
            date: date,
            soutenances: page
          });
        }
      }
    }

    return {pages:res};
  }
  async generatePDF(id: number){

    console.log(id);

    const query = this.sessionRepository
        .createQueryBuilder('session')
        .where("session.id = :id",{ id : id })
        .select(["session.nom, session. president"])
        .addSelect('session.nom', 'nom_session')
        .addSelect('session.president', 'president')
        .addSelect('soutenance.salle', 'salle')
        .addSelect('soutenance.date', 'date')
        .addSelect('concat(etudiant.nom, \' \', etudiant.prenom)', 'candidat')
        .addSelect('etudiant.filiere', 'filiere')
        .addSelect('concat(encadrant.nom, \' \', encadrant.prenom)', 'responsable_insat')
        .addSelect('projet.sujet', 'sujet')
        .addSelect('projet.societe', 'entreprise')
        .addSelect('projet.sujet', '')
        .innerJoin('soutenance', 'soutenance', "soutenance.sessionId = session.id")
        .innerJoin('projet', 'projet', "projet.soutenanceId = soutenance.id")
        .innerJoin('user', 'etudiant', "etudiant.id = projet.etudiantId")
        .innerJoin('user', 'encadrant', "encadrant.id = projet.encadrantId");

    console.log(query.getSql());
    const values = await query.getRawMany();

    const pdf = await this.pdfService.generatePDF(this.formatResults(values));
    return {url: await this.fileUploadService.upload(pdf)}
  }
}
