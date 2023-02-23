function taskAssignment(k, tasks) {
    // Write your code here.
    return tasks
      .map((num, i) => ({ num, i }))
      .sort((a,b) => a.num - b.num)
      .map((obj, i, arr) => {
        let endIdx = arr.length - (i + 1);
        return [obj.i, arr[endIdx].i]
    }).splice(0, k)
  }