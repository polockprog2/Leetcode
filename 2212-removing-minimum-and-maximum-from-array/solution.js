/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let minIndex = 0;
    let maxIndex = 0;

    // Find minimum and maximum indexes
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }

        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }

    // Make left the smaller index
    let left = Math.min(minIndex, maxIndex);
    let right = Math.max(minIndex, maxIndex);

    // Three possible ways
    let fromFront = right + 1;
    let fromBack = nums.length - left;
    let bothSides = (left + 1) + (nums.length - right);

    return Math.min(fromFront, fromBack, bothSides);
};
