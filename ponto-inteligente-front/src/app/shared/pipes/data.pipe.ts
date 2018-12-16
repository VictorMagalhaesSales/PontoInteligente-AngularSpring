import { Pipe, PipeTransform } from "@angular/core";

import * as moment from 'moment';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {
  
  transform(data: Date){
    return moment(data).format('DD/MM/YYYY HH:mm:ss'); 
  }

}