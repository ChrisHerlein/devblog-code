// CODE 
module.exports = class Validator {
    constructor() {
        this.nums = [];
    }

    add(n) {
        let found = this.nums.find(num => num == n);
        this.nums.push(n);
    }

    check(n) {
        for ( let i = 0; i < this.nums.length -1; i++ ) {
            for ( let j = i; j < this.nums.length; j++ ) {
                if ( this.nums[i] + this.nums[j] == n && this.nums[i] != this.nums[j] ) {
                    return true;
                }
            }
        }
        
        return false;
    }
}
