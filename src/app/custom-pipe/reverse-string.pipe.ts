import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string): string {
    let x : string = "";

    for(let i=value.length;i >= 0;i--){
      x = x + value.charAt(i);

    }

    return x;
  }

}
