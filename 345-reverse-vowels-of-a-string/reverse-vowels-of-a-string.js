/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const arr = s.split("")
    const vowels = "aeiouAEIOU"

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        while (left < right && !vowels.includes(arr[left])) {
            left++
        }
        while (left < right && !vowels.includes(arr[right])) {
            right--
        }

        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr.join("")
};