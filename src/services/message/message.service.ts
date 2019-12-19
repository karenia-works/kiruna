import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends Subject<OnScreenMessage[]> {
  constructor() {
    super();
  }

  private counter: number = 0;

  private messages: OnScreenMessage[] = [];

  public addMessage(msg: OnScreenMessage) {
    msg.idx = this.counter++;
    this.messages.push(msg);
    this.next(this.messages);
    if (msg.dismissTime !== 0) {
      if (msg.dismissTime === undefined) {
        setTimeout(() => {
          this.removeMessage(msg.idx);
        }, 10000);
      } else {
        setTimeout(() => {
          this.removeMessage(msg.idx);
        }, msg.dismissTime);
      }
    }
  }

  public removeMessage(idx: number) {
    this.messages = this.messages.filter(val => val.idx !== idx);
    this.next(this.messages);
  }
}

export interface OnScreenMessage {
  type: 'info' | 'warn' | 'error' | 'blank';
  message: string;
  dismissTime?: number;
  idx?: number;
}
