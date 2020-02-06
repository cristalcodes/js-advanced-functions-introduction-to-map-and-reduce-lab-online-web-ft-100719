function mapToNegativize(sourceArray){
  let negativeValues = []
  for (let i=0; i < sourceArray.length; i++){
    negativeValues.push( sourceArray[i] * -1)
  }
  return negativeValues
}

function mapToNoChange(sourceArray){
  let sameValues = []
  for (let i=0; i < sourceArray.length; i++){
    sameValues.push(sourceArray[i])
  }
  return sameValues
}

function mapToDouble(sourceArray){
  let doubledV= []
  for (let i=0; i < sourceArray.length; i++){
    doubledV.push(sourceArray[i] * 2)
  }
  return doubledV
}

function mapToSquare(sourceArray){
  let squaredV= []
  for (let i=0; i < sourceArray.length; i++){
    squaredV.push(sourceArray[i]**2)
  }
  return squaredV
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let initial = startingPoint
  for (let i=0; i < sourceArray.length; i++){
    initial = sourceArray[i] + initial
  }
  return initial
}

function reduceToAllTrue(sourceArray){
  for (let i=0; i < sourceArray.length; i++){
    if (!sourceArray[i]) return false
  }
    return true
}

function reduceToAnyTrue(sourceArray){
  for (let i=0; i < sourceArray.length; i++){
    if (!!sourceArray[i]) return true
  }
  return false
}
