import { Injectable } from '@nestjs/common';
import {render} from 'ejs';
import * as fs from 'fs';
import * as pdf from 'html-pdf';

@Injectable()
export class PdfService {
    async generatePDF(values){

        console.log(values);

        let template = await fs.promises.readFile('./src/pdf/table.ejs', 'utf-8');
        let html = await render(template, values);

        const options = {
            format: "A4",
            orientation: "portrait"
        }

        pdf.create(html, options).toFile("/tmp/report.pdf", function (err, data) {
            if (err) {
                console.log("PDF creation error:");
                console.log(err);
            } else {
                console.log("PDF file created successfully");
            }
        });

        return html;
    }
}
