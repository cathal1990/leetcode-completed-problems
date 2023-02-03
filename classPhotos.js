function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a,b) => a-b)
  blueShirtHeights.sort((a,b) => a-b)
  
  let backRow = 'red';
  
  if (redShirtHeights.length === 1) {
    return redShirtHeights[0] === blueShirtHeights[0] ? false : true
  }
  if (redShirtHeights[0] < blueShirtHeights[0]) backRow = 'blue'
  
  for (let i = 1; i < redShirtHeights.length; i++) {
    if (backRow === 'blue') {
      if (blueShirtHeights[i] <= redShirtHeights[i]) return false
    }
    else {
      if (redShirtHeights[i] <= blueShirtHeights[i]) return false
    }
  }
  return true
}
