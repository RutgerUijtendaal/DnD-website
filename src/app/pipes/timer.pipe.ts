import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return this.msToTime(value)
  }

  msToTime(duration: number) {
    let milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60)
  
    return seconds + "." + milliseconds;
  }
}
