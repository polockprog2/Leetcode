/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = {}

    for( let str of strs){
        let key = str.split("").sort().join("")
        
        if(!groups[key]){
            groups[key] =[]

        }
        groups[key].push(str)
    }
    return Object.values(groups)
};
