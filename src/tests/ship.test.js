const Ship = require('../ship');

test('Ship lenght', () => {
  const ship = Ship(3);
  expect(ship.lenght).toEqual(3);
});
test('Ship hits', () => {
  const ship = Ship(3);
  expect(ship.hits).toEqual(0);
});

test('Ship isSunk', () => {
  const ship = Ship(3);
  expect(ship.isSunk).toEqual(false);
});
