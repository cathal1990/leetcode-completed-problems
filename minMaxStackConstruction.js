class MinMaxStack {
    constructor() {
      this.array = [];
      this.mins = [Infinity];
      this.maxes = [-Infinity]
    }
    peek() {
      // Write your code here.
      return this.array[this.array.length -1]
    }
  
    pop() {
      // Write your code here.
      this.maxes.pop();
      this.mins.pop();
      return this.array.pop();
    }
  
    push(number) {
      // Write your code here
      const newMin = Math.min(number, this.mins[this.mins.length - 1])
      const newMax = Math.max(number, this.maxes[this.maxes.length - 1])
      this.mins.push(newMin)
      this.maxes.push(newMax)
      this.array.push(number)
    }
  
    getMin() {
      // Write your code here.
      return this.mins[this.mins.length - 1]
    }
  
    getMax() {
      // Write your code here.
      return this.maxes[this.maxes.length - 1]
    }
  }