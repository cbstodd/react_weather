var names = ['Colin', 'Kevin', 'Brian'];
var animals = ['Dog', 'Cat', 'Horse', 'Mouse', 'Pig'];

//names.forEach((name) => {   console.log('Different kind of', name ); });
//
//console.log('**********');
//
//names.forEach((name) => console.log(name));

let returnMe = (name) => name + '!';
//console.log(returnMe('Coler'));

const person = {
    name: 'Colper',
    personGreet: function () {
        names
            .forEach(function (name) {
                console.log(`Hello ${name}`);
            });
    },
    space: function () {
        console.log('********');
    },
    animalGreet: function () {
        animals
            .forEach(function (animal) {
                console.log(`${animal} are peoples best friends.`);
            });
    }
};
//
//person.personGreet(); person.space(); person.animalGreet();

const add = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

const add2 = (num1, num2) => {
    return `${num1} + ${num2} = ${num1 + num2}`;
};

console.log(add(423.93, 39393));
console.log(add2(4, 33));
