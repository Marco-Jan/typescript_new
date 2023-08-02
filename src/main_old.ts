



class Productlist {
    // private products: string[] = [];

    constructor(
        private readonly id: number,
        private products: string[],
        public costumer: string
        ) {}

    showProducts(this: Productlist) {
        console.log('all products', this.products);
    }

    addProducts(productName: string) {
        this.products.push(productName);

    }
}

const productList = new Productlist(1,['Apple', 'Banana', 'Orange'], "Ben");
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


