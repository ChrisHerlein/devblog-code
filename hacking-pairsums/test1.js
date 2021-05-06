const Validator = require('./' + process.argv[2] + '.js');

let inputs = [-5, -12, 1, 3, 6, 7, 2, 9, 5, 12, 26, 18, 21, 2, 5, 40, 40];
let validate = [-2, 4, 7, 17, 34, 38, 47, 80];
let expected = [true, true, true, true, false, true, true, false];

// TEST
let magic = new Validator();
for ( let i = 0; i < inputs.length; i++) {
    magic.add(inputs[i]);
}

let errors = 0;
for ( let i = 0; i < validate.length; i++) {
    if (magic.check(validate[i]) !== expected[i]) {
        console.log('Failed for:', validate[i], expected[i])
        errors++;
    }
}
if (errors == 0) {
    console.log('Passed!');
}
