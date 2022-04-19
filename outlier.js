const evenArr = [2, 4, 0, 100, 4, 11, 2602, 36]
const oddArr = [160, 3, 1719, 19, 11, 13, -21]

const outlier = arr => {
    let outlier = 0
    let oddNumbers = 0
    let evenNumbers = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            oddNumbers++
        } else {
            evenNumbers++
        }
    }
    if(oddNumbers > evenNumbers){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                return outlier = arr[i]
            }
        }
    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 1){
                return outlier = arr[i]
            }
        }
    }
}

console.log(outlier(evenArr))