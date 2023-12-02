import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// // eslint-disable-next-line no-unused-vars
// export function saveUser(user) {
//   throw new Error('Unimplemented');
// }

export function statePerson(state) {
  if (state.health > 50) {
    return 'healthy';
  }

  if (state.health < 15) {
    return 'critical';
  }

  return 'wounded';
}

export function sortPersons(persons) {
  persons.sort(function(a, b){
    return b.health - a.health;
  })
  return persons;
}
