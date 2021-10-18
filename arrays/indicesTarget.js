let array = [2,3,4,5,1,2,3];

function findTarget(arrayToLookUp,target){
    let returnIndices = [];
    if(arrayToLookUp.every((item) => typeof item === "number") && Array.isArray(arrayToLookUp)){
        for(let i=0;i<arrayToLookUp.length;i++){
            if(arrayToLookUp[i+1] && ((arrayToLookUp[i] + arrayToLookUp[i+1]) === target)){
                returnIndices.push(i);
                returnIndices.push(i+1);
                break;
            }
        }
        return returnIndices;
    }else{
        return "The parameter is either not an array or doesn't have all its values as integer";
    }
}

let result = findTarget(array,5);

console.log(result);

// Time Complexity O(n) Space Complexity(1)

