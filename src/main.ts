interface Icar {
    color: string;
    model: string;
    drive(maxspeed: number): void;
    stop(): void;
}
let myCar: Icar = {
    color: "red",
    model: "Audi",
    drive(maxspeed: number) {
        console.log("drive", maxspeed, "KmH");

    },
    stop() {
        console.log("stopping the car");

    },
};

// const cartest = iCa 
console.log(myCar);


interface isElectric {
    battery: number;
    model: string;
    getElectricConsumption: (kWh: number, distance: number) => number;
}

class Car implements isElectric{
    battery = 100;
    model = "Tesla";
    getElectricConsumption(kWH: number, distance: number):number{

        return( kWH * distance) / 100 ;
    }
}

