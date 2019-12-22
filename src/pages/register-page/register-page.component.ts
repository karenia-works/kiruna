import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessageService } from 'src/services/message/message.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.styl']
})
export class RegisterPageComponent implements OnInit {

  userName: string = ""
  password: string = ""
  email: string = ""

  constructor(private httpClient: HttpClient, private msgService: MessageService) { }

  ngOnInit() {
  }

  register() {
    let insert = {
      "user": {
        "userId": 0,
        "email": this.email,
        "userName": name,
        "balance": 0,
        "followers": [],
        "followings": [],
        "avatar": "https://www.gravatar.com/avatar/62B640BF559CF55759E4B443072A6ED8",
        "downloadList": []
      },
      "loginInfo": {
        "userId": 0,
        "email": this.email,
        "encryptedPassword": this.password,
        "key": "...",
        "type": 0
      }
    }

    this.httpClient.post(environment.endpoint + "/api/user", insert).subscribe({
      next: value => {
        this.msgService.addMessage({
          type: 'info',
          message: `Successfully registered`,
        });
      }, error: err => {
        this.msgService.addMessage({
          type: 'error',
          message: `Failed to register: ${JSON.stringify(err)}`,
        });
      }
    })
  }

}
