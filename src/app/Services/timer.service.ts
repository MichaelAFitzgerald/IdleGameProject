import { Injectable } from '@angular/core';
import { timer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // sends an event every tenth of a second
  private eventTimer = timer(0, 100);
  private eventNotice = new Subject();
  private notice$ = this.eventNotice.asObservable();

  constructor() {
    // every second this service will send a notice to the observable
    this.eventTimer.subscribe(x => {
      this.sendEvent();
    });
  }

  // returns this observable
  public get events() {
    return this.notice$;
  }

  // sends the event notification to the subscribed components
  private sendEvent() {
    this.eventNotice.next('Event');
  }
}
