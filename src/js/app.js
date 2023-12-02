// TODO: write your code here
import sum from './basic';
import { sortPersons, statePerson } from './user';

console.log('worked');

console.log(sum([1, 2]));

console.log(statePerson({ name: 'маг', health: 80 }));

const persons = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

const sPersons = sortPersons(persons);
console.log(sPersons);  
