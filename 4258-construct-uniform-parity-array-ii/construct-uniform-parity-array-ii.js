/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let min = Math.min(...nums1);

    if(min % 2 == 1){
        return true;
    }
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] % 2 !== min % 2) {
            return false;
        }
    }

    return true;
};