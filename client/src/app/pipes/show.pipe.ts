import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'show'
})
export class ShowPipe implements PipeTransform {

  transform(data: any, args: string): string {
    const fields = args.split(',') 
    let result = ""
    for(let i=0; i<fields.length; i++){
        if(fields[i] in data && data[fields[i]]){
            result += data[fields[i]] + " "
        }
    }
    return result
  }

}