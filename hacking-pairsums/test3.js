const Validator = require('./' + process.argv[2] + '.js');

let amount = process.argv[3];
let magic = new Validator();
let start = Date.now();

for ( let i = 0; i < amount; i++ ) {
    magic.add(i * 2); // only pair numbers
}

for ( let i = 1; i < amount; i++ ) { // starts at 1 because 0 will fail
    magic.check(i * 3); // pair will get true, impair will get false
}

console.log('Ended test:', Date.now() - start);

