class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head, prev = null) {
    if (!head) return prev
  
    const next = head.next
    head.next = prev;
  
    return reverseLinkedList(next, head)
  }