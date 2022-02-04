const Animal = function ({ name, energy }) {
    this.name = name;
    this.energy = energy;
};

const catObject = { name: "Cat", energy: 4 };

const cat = new Animal(catObject);


const cars = [
    {
        make: 'audi',
        model: 'r8',
        year: '2012',
    },
    {
        make: 'audi',
        model: 'rs5',
        year: '2013',
    },
    {
        make: 'ford',
        model: 'mustang',
        year: '2012',
    },
    {
        make: 'ford',
        model: 'fusion',
        year: '2015',
    },
    {
        make: 'kia',
        model: 'optima',
        year: '2012',
    },
];