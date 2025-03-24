/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindromeNumber = function(x) {
    //steps
    //If number is less than 0 it can't be a palindrome
    if(x < 0) return false;

    //Find the reverse of the number x
    //To Find the reverse
    //Provided temp i not greater than 0 and starting from reversed = 0
    //reverse is equal to the Reminder of the number from last to first when divided by 10.
    //i.e reversed = reversed * 10 + temp % 10
    let reversed = 0;

    for (let temp = x; temp > 0; temp = Math.floor(temp/10)) {
        reversed = reversed * 10 + temp % 10;
    }

    return x === reversed
    
};

console.log(isPalindromeNumber(131))