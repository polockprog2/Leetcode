/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = []

    for(let i = 0; i< nums1.length;i++){
        let current = nums1[i]
        let answer = -1
        for(let j = 0; j < nums2.length; j++){
            if(nums2[j]=== current){
                for(let k =j; k< nums2.length;k++){
                    if(nums2[k] > current){
                        answer = nums2[k]
                        break
                    }
                }
                break
            }
        }
        result.push(answer)
       
    }
    return result
};