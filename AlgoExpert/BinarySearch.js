// Write a function that takes in a sorted array of
// integers as well as a target integer.
// The function should use the Binary Search algorithm to find
// if the target number is contained in the array and should return its index if it is, otherwise -1.


const search = (nums, target) => {
    // declare start and end
    let start = 0
    let end = nums.length - 1
    // base condition
    while(start <= end){
        // find the mid point
        let mid = Math.floor((start+end)/2)
        // if middle element is the target, return middle index
        if(nums[mid] === target){
            return mid
            // if middle element is smaller, move the start point to mid + 1
        }else if(nums[mid] < target){
            start = mid + 1
            // if middle element it greater, move the end point to mid - 1
        }else{
            end = mid - 1
        }
    }
    // if not found, return -1
    return -1
}