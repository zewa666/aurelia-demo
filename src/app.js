import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {PresentationService} from './services/presentation-service';

export class App {

  static inject = [PresentationService];

  constructor(service){
    this.service = service;
  }

  activate() {
    return this.service.loadAll();
  }

  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','presentation-list'],  moduleId: './presentation-list', nav: true, title:'Presentations' },
      { route: 'presentation/:id/edit',  moduleId: './presentation-edit', nav: false, title:'Edit presentation' },
      { route: 'presentation/:id',  moduleId: './presentation', nav: false, title:'Presentation' }
    ]);

    this.router = router;
  }
}
