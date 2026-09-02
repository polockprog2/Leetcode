/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        if (s[left] !== s[right]) {

            // Try deleting s[left]
            if (isPalindrome(left + 1, right)) {
                return true;
            }

            // Try deleting s[right]
            if (isPalindrome(left, right - 1)) {
                return true;
            }

            return false;
        }

        left++;
        right--;
    }

    return true;
};
