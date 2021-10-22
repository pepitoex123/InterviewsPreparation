function containerWithMostWater(arrayValues){
    try{
        let containerWithMostWater = 0;
        let l=0;
        let w=0;
        for(let i=0;i<arrayValues.length;i++){
            for(let j=0;j<arrayValues.length;j++){
                if(j === i){
                    continue;
                }

                // Get length
                if(l < arrayValues[i]){
                    l = arrayValues[i]
                }else if(l < arrayValues[j]){
                    l = arrayValues[j];
                }

                // Get width
                if(w < i){
                    w = i;
                }else if(w < j){
                    w = j;
                }


                // Testing for container with most water

                if((l * w) > containerWithMostWater){
                    console.log(l,w);
                    containerWithMostWater = l * (w+1);
                }
            }
        }
        return containerWithMostWater
    }catch(error){
        console.log(error.message);
    }
}


let array = [4,1,2,7]

console.log(containerWithMostWater(array))

