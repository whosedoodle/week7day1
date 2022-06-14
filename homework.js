//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


function consecutive(arry){
    for (num of arry)
        let i = 1
        while (num == i) {
            i++;
        } else {
            return num;
        }
          
}

let exerciseOneArr = [1, 2, 3, 5, 6, 7]
console.log(consecutive(exerciseOneArr))

//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 

let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

function positive_sum(numlist){
    let positives;
    for (num of numlist)
        if (num > 0) {
            positives.push(num);
        }
        return positives 
}

console.log(positive_sum(numbers1))
console.log(positive_sum(numbers2))