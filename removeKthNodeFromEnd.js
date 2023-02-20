function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    let count = 0;
    let currentNode = head;
    let pointer = head;
  
    while (pointer !== null) {
      if (count > k) {
        currentNode = currentNode.next;
      }
        pointer = pointer.next;
        count ++
    }
  
    if (k >= count) {
      head.value = head.next.value
      head.next = head.next.next
      return
    } else {
      let temp = currentNode.next;
      currentNode.next = temp.next;
    }
  }