export default class Asset {
    constructor(id, name, price, brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    updateName(name) {
        this.name = name;
    }

    updatePrice(price) {
        this.price = price;
    }

    updateBrand(brand) {
        this.brand = brand;
    }
}