import { Person } from './person';

export class PeopleService{
  getAll() : Person[] {
    return [
      {name: 'Vincent Vega', height: 177, weight: 70},
      {name: 'Mia Wallace', height: 200, weight: 100},
      {name: 'Marcellus Wallace', height: 185, weight: 85},
    ];
  }

}
