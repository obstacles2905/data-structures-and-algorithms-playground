
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

