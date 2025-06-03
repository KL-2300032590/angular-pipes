import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkColor'
})
export class LinkColorPipe implements PipeTransform {

  transform(clicked : boolean): string {
    return clicked? 'red' : 'black';
  }

}
