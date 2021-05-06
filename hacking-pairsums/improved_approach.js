// CODE 
module.exports = class Validator {
    constructor() {
        this.nums = [];
				this.sorted = false;
    }

		sort() {
				if (this.sorted) {
					return;
				}
        this.nums = this.nums.sort((n1, n2) => ((n1 - n2) / Math.abs((n1 - n2))) | 0 );
				this.sorted = true;
		}

    add(n) {
        let found = this.nums.find(num => num == n);
        if (found) {
            return;
        }
        this.nums.push(n);
    }

    check(n) {
				this.sort();
        let upper = this.nums.findIndex((num) => num >= n - this.nums[0]);
        upper = upper > 0 ? upper : this.nums.length - 1;

        let lower = this.nums.findIndex((num) => num >= n - this.nums[upper]);
        lower = lower > 0 ? lower : 0;

        let midInd = this.nums.findIndex((num) => num >= Math.floor(n/2));
        let ri = midInd;
        let li = midInd - 1;

        while ( ri < upper && li >= lower ) {
            let res = (this.nums[ri] + this.nums[li]) - n;
            if ( res == 0 ) {
                return true;
            }
            if ( res < 0 ) {
                ri++;
            } else {
                li--;
            }
        }
        
        return false;
    }
}
