import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinPreviw'
})
export class SinPreviwPipe implements PipeTransform {

  transform(value: any): any {

    if (value == null) {
          return  "";
    }
    return value;
  }

}
