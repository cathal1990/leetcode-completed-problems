function sumOfLinkedLists(list1, list2) {
    // Write your code here.
    let list1Nums = [];
    let list2Nums = [];
  
    while (list1) {
      list1Nums.push("" + list1.value)
      list1 = list1.next;
    }
    
    while (list2) {
      list2Nums.push("" + list2.value)
      list2 = list2.next;
    }
  
    let num1 = list1Nums.reverse().join('')
    let num2 = list2Nums.reverse().join('')
    let sum = Number(num1) + Number(num2);
    let splitSum = ("" + sum).split('')
  
    let newList = new LinkedList(Number(splitSum.pop()));
    let current = newList
    
    while (splitSum.length) {
      let nextNode = new LinkedList(Number(splitSum.pop()))
      current.next = nextNode
      current = nextNode
    }
     return newList
  }