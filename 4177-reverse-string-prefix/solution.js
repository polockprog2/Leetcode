/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const arr = s.split("")

    for (let i = 0; i < arr.length; i += k) {
        let left = i
        let right = k -1

        while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    }
  
    return arr.join("")
};
