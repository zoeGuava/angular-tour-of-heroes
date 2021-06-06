import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // Angular 只會與 public property binding
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
