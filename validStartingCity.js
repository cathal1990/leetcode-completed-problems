function validStartingCity(distances, fuel, mpg) {
    let milesRemaining = 0;
    let result = 0;
  
    for (let i=1; i<distances.length; i++) {
      milesRemaining += (fuel[i - 1] * mpg) - distances[i - 1];
      if (milesRemaining < 0) {
        result = i
        milesRemaining = 0;
      }
    }
    return result
  }