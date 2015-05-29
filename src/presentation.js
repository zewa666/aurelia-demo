import {PresentationService} from './services/presentation-service';

export class Presentation {

  presentation;
  static inject = [PresentationService];

  constructor(service){
    this.service = service;
  }

  activate(param) {
    return this.service.getById(param.id).then( (result) => {
      this.presentation = result;
    });
  }

  attached() {
    // called when View is attached, you are safe to do DOM operations here
  }
}
