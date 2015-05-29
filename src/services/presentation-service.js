import faker from 'faker';
import lorem from 'lorem';

export class PresentationService {

  presentations = [];

  constructor() {

  }

  loadAll() {
    return new Promise( (resolve) => {
      for(let i = 1; i<=10; i++) {
        this.presentations.push({
          id: Math.floor(Math.random() * (800000 - 0)) + 1,
          title: faker.name.findName(),
          text: lorem({ count: 3, units: 'sentences'}),
          img: faker.image.avatar(200,200),
          created: faker.date.past()
        });
      }

      resolve(true);
    })

  }

  getById(id) {
    return new Promise( (resolve) => {
      let match = this.presentations.find( (p) => {
        return p.id == id;
      });

      resolve(match);
    });
  }

  save(presentation) {
    return new Promise( (resolve) => {
      let match = this.presentations.find( (p) => {
        return p.id == presentation.id;
      });

      Object.assign(match, presentation);

      resolve(true);
    })
  }
}
