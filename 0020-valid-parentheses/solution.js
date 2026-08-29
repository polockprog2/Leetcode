/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var char = s[i]

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);

        }
        else {
            var last = stack.pop();

            if  ((char === ')' && last !== '(')||
                (char === '}' && last !== '{')||
                (char === ']' && last !== '[') 
                ){
                return false;
            }
        }
    }
    return stack.length === 0;

};
