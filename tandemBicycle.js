function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    redShirtSpeeds.sort((a,b) => a-b)
    fastest ? blueShirtSpeeds.sort((a,b) => b-a) : blueShirtSpeeds.sort((a,b) => a-b)
  
    let counter = 0;
  
    for (let i=0; i<redShirtSpeeds.length; i++) {
      if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
        counter += redShirtSpeeds[i]
      }
      else {
        counter += blueShirtSpeeds[i]
      }
    }
    return counter
  }