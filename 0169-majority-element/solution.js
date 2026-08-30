/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let mjr = new Map();

    for (i = 0; i < nums.length; i++) {
        if (mjr.has(nums[i])) {
            mjr.set(nums[i], mjr.get(nums[i]) + 1);
        }
        else {
            mjr.set(nums[i], 1);
        }
        if (mjr.get(nums[i]) > nums.length / 2) {
            return nums[i];
        }

    }
};
