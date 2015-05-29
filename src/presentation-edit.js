import {PresentationService} from './services/presentation-service';

export class PresentationEdit {

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

  save() {
    this.service.save(this.presentation).then( () => {
      alert('Saved!');
    });
  }
}
