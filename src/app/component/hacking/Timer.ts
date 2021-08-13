import { interval, Observable, of, Subject, Subscription } from 'rxjs';
import { TimerConfig, TimerState, TimerUpdate } from './types';

export class Timer {
  private TIMER_INTERVAL = 100;
  private _timer: Subscription | undefined;
  state: TimerState = 'start';
  timer: Subject<TimerUpdate> = new Subject();
  miliSecondsLeft!: number;
  progress: number = 100;

  constructor(private config: TimerConfig) {
    this.setBaseTime();
  }

  start() {
    this.setState('progress');

    this._timer = interval(this.TIMER_INTERVAL).subscribe(() => {
      this.miliSecondsLeft = this.miliSecondsLeft - 100;
      this.updateProgress();

      if (this.miliSecondsLeft <= 0) {
        this.miliSecondsLeft = 0;
        this.setState('finished');
        this._timer?.unsubscribe();
        return;
      }

      this.updated();
    });
  }

  pause() {
    this._timer?.unsubscribe();
    this.setState('paused');
  }

  reset() {
    this.setState('start');
    this.setBaseTime();
  }

  private updateProgress() {
    this.progress = Math.floor((this.miliSecondsLeft / (this.config.maxTimeSeconds * 1000)) * 100);
  }

  private updated() {
    this.timer.next({
      state: this.state,
      left: this.miliSecondsLeft,
    });
  }

  private setState(state: TimerState) {
    this.state = state;
    this.updated();
  }

  private setBaseTime() {
    this.miliSecondsLeft = this.config.maxTimeSeconds * 1000;
  }
}
