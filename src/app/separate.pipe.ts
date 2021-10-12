import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'separator'
})
export class SeparatePipe implements PipeTransform{
  transform(value: string){  
    return value.trim().replace(/\s+/g, ' ').split(' ').join(', ');
  }
}