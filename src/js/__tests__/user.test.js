import { statePerson, sortPersons, loadUser} from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test.each([
  [{name: 'мечник', health: 10}, 'critical'],
  [{name: 'маг', health: 80}, 'healthy'],
  [{name: 'лучник', health: 20}, 'wounded'],
])(
  ('Person %s health level %i amount'), (person, state) => {
  const result = statePerson(person);
  expect(result).toBe(state); 
});

const personArray = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
const sortArray = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

describe('sortPersons', () => {
  test('Проверка сортировки героев по уровню здоровья', () => {
    const result = sortPersons(personArray);
    expect(result).toEqual(sortArray);
  });
});
