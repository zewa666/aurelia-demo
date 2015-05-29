import {PresentationService} from './services/presentation-service';

export class PresentationList {

  static inject = [PresentationService];

  constructor(service){
    this.service = service;
  }

  activate() {
    // load data from server and return promise so the page waits for it
  }

  attached() {
    // called when View is attached, you are safe to do DOM operations here
  }
}
