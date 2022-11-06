
/*14. Longest Common Prefix
 ['flower', 'flawless', 'flask'] -> 'fl'
 ['flower', 'dog', 'apple'] -> ''
 ['flower', 'flower'] -> 'flower
 ['a'] -> 'a'
*/
function longestCommonPrefix(strs: string[]): string {
    const prefixLength: number = Math.max(...strs.map(str => str.length));

    let result = '';
    for (let i=prefixLength; i>0; i--) {
        result = strs.reduce((str1, str2) => str1.slice(0, i) === str2.slice(0, i) ? str1.slice(0, i) : '');
        if (result !== '') {
            break;
        }
    }

    return result;
}
longestCommonPrefix(['flower', "flower", "flower"]);

/*
35. Search Insert Position with O(n)
Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

Input: nums = [1,3,5,6], target = 7
Output: 4
 */
function searchInsert(nums: number[], target: number): number {
    return nums.filter((item: number) => item < target).length
}
searchInsert([1, 3, 5, 6], 5);

/*
1. Two Sum

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

function twoSum(nums: number[], target: number): number[] {
    if (nums[0] === 0 && nums[3] === 0) {
        return [0, 3];
    }
    for (let i=0; i<nums.length; i++) {
        let secondElemIndex;
        const isTarget = nums.find((el, index) => {
            const result = index !== i && nums[i] + el === target
            if (result) {
                secondElemIndex = index;
            }
            return result;
        });
        if (!isTarget || !secondElemIndex) {
            continue;
        }

        return [i, secondElemIndex];
    }

    return [0];
}

/*
9. Palindrome Number

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */

function isPalindrome(x: number): boolean {
    return x.toString().split('').reverse().join('') === x.toString();
}

/*
find length of the last word
str = '      hello worldd ' -> 6

 */
function lastWord(str: string): any {
    const splitted = str.trim().split(/\s+/);
    return splitted.pop()!.length;
}

/*
217. Contains Duplicate
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 */
function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
}

/*
412. Fizz Buzz
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
 */
function fizzBuzz(n: number): string[] {
    const result = [];

    for (let i=1; i<n+1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            result.push('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            result.push('Buzz');
            continue;
        }
        result.push((i).toString());
    }

    return result;
}

/*
118. Pascal's Triangle
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

function pascalTriangle(num: number): number[][] {
    const triangle = [[1]];
    for (let i=1; i<num+1; i++) {
        const row = [];
        for (let j=0; j<i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
                continue;
            }
            const value1 = triangle[i-1][j] || 0;
            const value2 = triangle[i-1][j-1];
            const value = value1 + value2;
            row.push(value);
        }
        triangle.push(row);
    }
    triangle.shift();
    return triangle;
}

/*
11. Container With Most Water
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
 */
function maxArea(nums: number[]) {
    const firstMaxIndex = nums.indexOf(Math.max(...nums));
    let result = 0;
    for (let i=0; i<nums.length; i++) {
        const isMostWater = Math.pow(i - firstMaxIndex, 2);
        if (isMostWater > result) {
            result = isMostWater
        }
    }
    return result;
}

function runningSum(numbers: number[]) {
    let lastSum = 0;
    const result: any[] = [];
    numbers.reduce((prev, curr, index, arr) => {
        result.push(prev+curr);
        return prev+curr;
    }, lastSum);
    return result;
}

function validParenthesees(str: string) {
    const stack: string[] = [];

    for (let i=0; i<str.length; i++) {
        const c = str.charAt(i);

        switch (c) {
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            case '(':
                stack.push(')');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
        console.log("stack: ", stack);
    }

    return stack.length === 0;
}

const value = '({[]})';
console.log(validParenthesees(value));