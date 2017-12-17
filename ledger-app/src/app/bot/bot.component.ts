import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechService, Message } from './../_services/speech.service';
import { DashboardService } from './../_services/dashboard.service';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/scan";
import { IWindow } from "./webkit.component";
declare let $: any;
declare var webkitSpeechRecognition: any;
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  selected = false;
  chatWindow = false;
  messages: Observable<Message[]>;
  assertMe: boolean;
  vartext: string;
  message: string;
  constructor(public chat: SpeechService, private ledger: DashboardService) {
  }
  closeChatWindow(){
    this.chatWindow = false;
  }
  toggleChatbot(selected) {
    this.selected = !this.selected;
    if (!selected) {
      this.startRecognition();
      this.chatWindow = true;
    } else {
      this.stopRecognition();
    }
  }
  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation
      .asObservable()
      .scan((acc, val) => acc.concat(val));
    this.checkformessage();
  }
  checkformessage() {
    setTimeout(() => {
      if (this.assertMe) {
        this.assertMe = false;
      }
      if (!this.assertMe) {
        this.checkformessage();
      }
    }, 300);
  }

  sendMessage(formValue) {
    this.message = formValue;
    this.chat.sentToWit(formValue);
    this.chat.update({ content: this.message, sentBy: 'Saurav' });
  }
  recognition = new webkitSpeechRecognition();

  startRecognition(): void {
    console.log("recording voice");
   
    let final_transcript = "";
    const { webkitSpeechRecognition }: IWindow = <IWindow>window;
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = "en-US";
    this.recognition.start();

    this.recognition.onstart = (event) => {
      console.log("onstart event started");
    };
    this.recognition.onresult = (event) => {
      let interim_transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      this.vartext = final_transcript;
      console.log(this.vartext);
      this.sendMessage(this.vartext);
      this.assertMe = true;
    };

    this.recognition.onend = (event) => {
      this.toggleChatbot(this.selected);
      console.log(new Date(Date.now()));
      console.log('recogniton ended');
    };
    // this.recognition.onspeechend=function(){
    //   // this.recognition.stop();      
    //   console.log(new Date(Date.now()));
    //   console.log('Speech recognition has stopped.');
    // };
  }

  stopRecognition(): void {
    this.recognition.stop();
  }
}
