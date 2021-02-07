import { Injectable } from '@nestjs/common';
import {render} from 'ejs';
import * as fs from 'fs';
import * as pdf from 'html-pdf';
import * as Promise from 'bluebird'

@Injectable()
export class PdfService {
    constructor(){

    }
    async generatePDF(values){
        let template = await fs.promises.readFile('./src/pdf/table.ejs', 'utf-8');
        let html = await render(template, values);

        /*const html_path = "/tmp/rendered_session.html";
        console.log(`Successfully rendered PDF Session! Saving to ${html_path}`);

        let write_res = await  fs.promises.writeFile(html_path, res);
        console.log(`Write result: ${write_res}`);*/

        const options = {
            format: "A4",
            orientation: "portrait"
        }
        
        const filename = `/tmp/report_${Date.now()}.pdf`


        const createResult = pdf.create(html, options);
        const pdfToFile = Promise.promisify(createResult.__proto__.toFile, { context: createResult });
        await pdfToFile(filename)

        const buffer = fs.readFileSync(filename)
        return {originalname: filename, buffer}

    }
}
