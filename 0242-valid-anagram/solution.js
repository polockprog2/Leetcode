/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    
    if(s.length !==  t.length){
        return false;
    }
    let count= {};
    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
    }

    for(let i= 0;i < t.length; i++){
        count[t[i]] = (count[t[i]] || 0 )- 1;
    }
    
    for(let char in count){
        if(count[char] !== 0){
            return false;
        }
    }
    return true;
};
