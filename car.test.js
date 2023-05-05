const Car = require('./car');

describe('Car', () => {
    test('manufacturer, price, engine type properties', () => {
        const car = new Car('Volvo', 20000, 'gas');
        expect(car.manufacturer).toBe('Volvo');
        expect(car.price).toBe(20000);
        expect(car.engineType).toBe('gas');
    });
});