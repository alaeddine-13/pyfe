import { Injectable } from '@angular/core';
import { ImplicitReceiver } from '@angular/compiler';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }
  public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary', cellDates:true, cellStyles:true});

    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    const data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));

    return data;
  }
}
