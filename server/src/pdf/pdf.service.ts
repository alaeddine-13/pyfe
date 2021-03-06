import { Injectable } from '@nestjs/common';
import {render} from 'ejs';
import * as fs from 'fs';
import * as pdf from 'html-pdf';
import * as Promise from 'bluebird';

@Injectable()
export class PdfService {
    constructor(){

    }
    async generatePDF(values){

        let template = await fs.promises.readFile('./src/pdf/table.ejs', 'utf-8');
        let html = await render(template, values);


        const options = {
            format: "A3",
            orientation: "portrait"
        }
        
        const filename = `session_${Date.now()}.pdf`
        const dir = '/tmp'

        const createResult = pdf.create(html, options);
        const pdfToFile = Promise.promisify(createResult.__proto__.toFile, { context: createResult });
        await pdfToFile(`${dir}/${filename}`)

        const buffer = fs.readFileSync(`${dir}/${filename}`)
        return {originalname: filename, buffer}

    }
}
