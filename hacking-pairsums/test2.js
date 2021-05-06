const Validator = require('./' + process.argv[2] + '.js');

let inputs = [-5, -12, 1, 3, 6, 7, 2, 9, 5, 12, 26, 18, 21, 2, 5, 40, 40];
let amount = process.argv[3];

let magic = new Validator();

let start = Date.now();
for ( let i = 0; i < inputs.length; i++) {
    magic.add(inputs[i]);
}

for ( let i = 0; i < amount; i++ ) {
    magic.add(40 + i);
}

for ( let i = 0; i < amount; i++ ) {
    magic.check(34);
}

console.log('Ended test:', Date.now() - start);

