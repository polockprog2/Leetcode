/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    let count = {};

    // Count letters available in magazine
    for (let i = 0; i < magazine.length; i++) {
        count[magazine[i]] = (count[magazine[i]] || 0) + 1;
    }

    // Use letters to build ransomNote
    for (let i = 0; i < ransomNote.length; i++) {

        if (!count[ransomNote[i]]) {
            return false;
        }

        count[ransomNote[i]]--;
    }

    return true;
};
