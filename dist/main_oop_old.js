"use strict";
class Product {
    constructor(id, name, price, rating) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
    printProduct() {
        return `${this.name} - ${this.price}`;
    }
    showRating() {
        return `Rating: ${this.rating}`;
    }
    static showPrice(price) {
        return `hhh: ${price * 1.2}`;
    }
}
// // const newProdukt = new Product(1, "Apple", 2.99, 5);
// // newProdukt.printProduct();
// // newProdukt.showRating();
// class SpecialOfferProduct extends Product {
//     constructor(name: string, price: number, rating: number, private percentageDiscount: number) {
//         super(Math.floor(Math.random() * 100), name, price, rating);
//     }
//     getDiscountedPrice() {
//         return this.price - (this.price * this.percentageDiscount) / 100;
//     }
//     printProduct(): string {
//         return `${super.printProduct()} - ${this.percentageDiscount} % off`;
//     }
//     changeRating(rating: number) {
//         this.rating = rating;
//     }
// }
// const specialProduct = new SpecialOfferProduct("Book", 20, 5, 25)
// const product = new Product(1, "notebook", 600, 3.5)
// // specialProduct.rating = 5;
// console.log(specialProduct.printProduct());
// console.log(product.printProduct());
// console.log(specialProduct.getDiscountedPrice());
// // vererbung aus der mutterklasse class Produkt und hinzufügen von neuen eigenschaften in ein Array
// type Specs = { camera: string, size: number, cpu: string, ram: string };
// class SmartPhone extends Product {
//     specs: Specs[] = [];
//     constructor(name: string, price: number, rating: number, specs: Specs[]) {
//         super(Math.random(), name, price, rating);
//         this.specs = specs;
//     }
//     printProduct(): string {
//         return `${this.name} - Specs: ${this.specs[0].camera} - ${this.specs[0].cpu} - ${this.specs[0].ram} - ${this.specs[0].size}`;
//     }
// }
// const newPhone = new SmartPhone("Samsung", 600, 4, [
//     {
//         camera: "leica",
//         size: 50,
//         cpu: "ka",
//         ram: "512",
//     },
// ]);
// console.log(newPhone.printProduct());
// // static priority
// const nproduct = new Product(1, "aplle", 5.5, 4);
// Product.showPrice(nproduct.price);
// class ShoppingCart {
//     private product: Product[] = []
//     private static instance: ShoppingCart;
//     constructor(product: Product[] = []){
//         this.product = product;
//     }
//     static getInstance() {
//         if(!ShoppingCart.instance){
//            return ShoppingCart.instance = new ShoppingCart();
//         }
//         return ShoppingCart.instance;
//     }
//     addProduct(){
//         this.product.push(product);
//     }
//     showProduct(){
//         console.log(this.product);
//     }
// }
// const cart = ShoppingCart.getInstance();
// console.log(cart);
//erstellen eiern Klasse UNiqueProduct. DIese sollte beliebig viele Produkte enthalten. Von der Klasse UniqueProduct darf es nur eine einzige Instanz geben. Verwende dazu einen privaten Konstruktor und eine statische Methode getInstance().
// const product = new Product(1, "aplle", 5.5, 4);
class UniqueProduct {
    constructor(product = []) {
        this.product = [];
        this.product = product;
    }
    static getInstance() {
        if (!UniqueProduct.instance) {
            return UniqueProduct.instance = new UniqueProduct();
        }
        return UniqueProduct.instance;
    }
    addProduct(product) {
        this.product.push(product);
    }
    showProduct() {
        console.log(this.product);
    }
}
const product = UniqueProduct.getInstance();
console.log(product);
//# sourceMappingURL=main_oop_old.js.map