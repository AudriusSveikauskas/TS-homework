import LandVehicle from './land-vehicle.js';
import WaterVehicle from './water-vehicle.js';
import AirVehicle from './air-vehicle.js';
const vehiclesArr = [
    new LandVehicle({
        tires: [
            'CONTINENTAL EcoContact 6',
            'FIRESTONE RoadHawk',
            'MICHELIN Primacy 3',
        ],
    }, {
        brand: 'BMW',
        model: '760Li',
        year: 2021,
    }),
    new LandVehicle({
        tires: [
            'YOKOHAMA Ice Guard',
            'MICHELINPOLOT SPORT 4',
            'CONTINENTAL ContiSportContact 5',
        ],
    }, {
        brand: 'Audi',
        model: 'Q8',
        year: 2018,
    }),
    new WaterVehicle({ maxDepth: 10 }, { brand: 'Rinspeed', model: 'Squba', year: 2008 }),
    new WaterVehicle({ maxDepth: 0 }, { brand: 'Gibbs', model: 'Aquada', year: 2004 }),
    new AirVehicle({ maxAltitude: 9000 }, { brand: 'Terrafugia', model: 'Transition', year: 2009 }),
    new AirVehicle({
        maxAltitude: 12000,
    }, { brand: 'AVE', model: 'Mizar', year: 1973 }),
];
vehiclesArr.forEach((vehicle) => console.log(vehicle.toString()));
//# sourceMappingURL=main.js.map