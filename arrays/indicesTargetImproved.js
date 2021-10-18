let array = [2,3,4,5,1,2,3];


function findTarget(arrayToLookUp,target){
    let returnIndices = [];
    if(arrayToLookUp.every((item) => typeof item === "number") && Array.isArray(arrayToLookUp)){
        let objectToLookUp = {};
        for(let i=0;i<arrayToLookUp.length;i++){
            if(arrayToLookUp[i] && objectToLookUp[(target - arrayToLookUp[i])]){
                returnIndices.push(i);
                returnIndices.push(objectToLookUp[(target-arrayToLookUp[i])]);
            }else{
                objectToLookUp = {
                    ...objectToLookUp,
                    [arrayToLookUp[i]]: i
                }
            }
        }
        if(returnIndices.length > 0){
            return returnIndices;
        }else{
            return null
        }
    }else{
        return "The parameter is either not an array or doesn't have all its values as integer";
    }
}

let result = findTarget(array,5);

console.log(result);

// Time Complexity O(n) Space Complexity O(n)