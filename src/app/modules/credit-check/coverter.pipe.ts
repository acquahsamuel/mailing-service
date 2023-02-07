import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coverter'
})
export class CoverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
