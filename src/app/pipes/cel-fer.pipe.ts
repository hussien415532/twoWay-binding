import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celFar'
})
export class CelFarPipe implements PipeTransform {

  transform(value: number): number {
    return value *(9/5)+32;
  }

}
