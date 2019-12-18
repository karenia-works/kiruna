import { Component, OnInit } from '@angular/core';
import {
  OnScreenMessage,
  MessageService,
} from 'src/services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.styl'],
})
export class MessageComponent implements OnInit {
  constructor(private msgService: MessageService) {
    msgService.subscribe({
      next: newMsg => (this.messages = newMsg),
    });
  }

  messages: OnScreenMessage[];

  ngOnInit() {}

  removeMessage(idx: number) {
    console.log(idx);
    this.msgService.removeMessage(idx);
  }
}
