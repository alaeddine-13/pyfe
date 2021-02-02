import {Component, Input, OnInit} from '@angular/core';
import {BASE_API, PROJET} from '../../globals/vars';

@Component({
  selector: 'app-projet-item',
  templateUrl: './projet-item.component.html',
  styleUrls: ['./projet-item.component.css']
})
export class ProjetItemComponent implements OnInit {

  @Input() projet:any;

  constructor() { }

  ngOnInit(): void {
  }

}
