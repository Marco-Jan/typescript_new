"use strict";
class Productlist {
    // private products: string[] = [];
    constructor(id, products, costumer) {
        this.id = id;
        this.products = products;
        this.costumer = costumer;
    }
    showProducts() {
        console.log('all products', this.products);
    }
    addProducts(productName) {
        this.products.push(productName);
    }
}
const productList = new Productlist(1, ['Apple', 'Banana', 'Orange'], "Ben");
productList.addProducts("uuuu");
// productList.products[4] = "test2";
productList.showProducts();
// const anotherList = {
//     products: ["notebook"],
//     showProducts: productList.showProducts,
//  };
// anotherList.showProducts();
// const myData: [string, string, number] = ['Hello', 'World', 2023];//tuble
// console.log(myData);
// //array
// const myArray: string[] = ['Hello', 'World', '2023'];
// //anytype
// const myAny: any = 2023;
// //unitype
// const myUni: number | string = 2023;
// //literaltype
// const myLiteral: 'Hello' | 'World' = 'World';
// //coustomtype
// type myType = string | number;
// // enum
// enum Role { ADMIN, READ_ONLY, AUTHOR };
// const myEnum: Role = Role.ADMIN;
//# sourceMappingURL=main_old.js.map