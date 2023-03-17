function staircaseTraversal(height, maxSteps) {
    if (height === 0) return 1
    const values = { 0:1 };
    let count = 0;

    for (let i = 1; i <= height; i++) {
        count += values[i-1];
        count -= values[i-1-maxSteps] || 0
        values[i] = count
        delete values[i-1-maxSteps]
    }
    return count
  }
