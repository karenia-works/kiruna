import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/services/account/account.service';
import { MessageService } from 'src/services/message/message.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private msgService: MessageService
  ) {}
  username: string = '';
  password: string = '';
  error?: string;
  ngOnInit() {}

  async login() {
    this.error = undefined;
    try {
      let result = await this.accountService.login(
        this.username,
        this.password
      );
      this.msgService.addMessage({
        type: 'info',
        message: `Successfully logged in as ${this.username}`,
      });
    } catch (e) {
      this.msgService.addMessage({
        type: 'error',
        message: (e as Error).message,
      });
    }
  }
}
