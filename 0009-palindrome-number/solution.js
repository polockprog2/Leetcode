/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var findPalindrome = x.toString();
    var reversed = "";
    for(var i = findPalindrome.length -1; i >= 0; i--){
        reversed += findPalindrome[i];
    }
    if(findPalindrome === reversed){
        return true;
    }
    else{
        return false;
    }
};
isPalindrome(121);
