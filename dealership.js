const Dealership = function (name, maxCars) {
    this.name = name;
    this.maxCars = maxCars;
    this.stock = [];
}

module.exports = Dealership

// methods

countCars() {
    return this.stock.length;
}
