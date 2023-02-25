function mergingLinkedLists(list1, list2) {
  // Write your code here.
  let l1 = list1;
  let l2 = list2;
  
  while (l1 !== l2) {
    l1 = !l1 ? list2 : l1.next;
    l2 = !l2 ? list1 : l2.next;
  }
  return l1
}