function sunsetViews(buildings, direction) {
    // Write your code here.
    let east = direction === "EAST";
    if (east) buildings.reverse();
    let output = [];
    let max = 0;
    
    buildings.forEach((x, i) => {
      if (x > max) {
        max = x;
        output.push(east ? buildings.length-i-1 : i)
      }
    })
    return east ? output.reverse() : output
  }
  