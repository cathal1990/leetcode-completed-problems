function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let currentNode = linkedList
  
    while (currentNode.next) {
      
      if (currentNode.next.value === currentNode.value) {
        currentNode.next = currentNode.next.next;
      }
      else {
        currentNode = currentNode.next
      }
    }
    return linkedList
  }