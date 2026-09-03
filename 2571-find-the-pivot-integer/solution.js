/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {

    for (let x = 1; x <= n; x++) {

        let leftSum = 0;
        let rightSum = 0;

        // 1 to x
        for (let i = 1; i <= x; i++) {
            leftSum += i;
        }

        // x to n
        for (let i = x; i <= n; i++) {
            rightSum += i;
        }

        if (leftSum === rightSum) {
            return x;
        }
    }

    return -1;
};
