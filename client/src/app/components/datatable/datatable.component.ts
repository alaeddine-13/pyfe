import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, OnDestroy {
  @Input() elements: any[]
  @Input() columns: [string, string][]
  @Input() pageLength: number = 5
  @Input() linkColumns: [string, string, (id: any) => string][]
  dtOptions: DataTables.Settings = {};
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() {
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: this.pageLength
    };
    console.log(this.elements)
  }
  ngOnDestroy(): void {
  }

}
