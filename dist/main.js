"use strict";
let myCar = {
    color: "red",
    model: "Audi",
    drive(maxspeed) {
        console.log("drive", maxspeed, "KmH");
    },
    stop() {
        console.log("stopping the car");
    },
};
// const cartest = iCa 
console.log(myCar);
class Car {
    constructor() {
        this.battery = 100;
        this.model = "Tesla";
    }
    getElectricConsumption(kWH, distance) {
        return (kWH * distance) / 100;
    }
}
//# sourceMappingURL=main.js.map