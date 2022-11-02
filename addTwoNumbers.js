//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
const addTwoNumbers = (l1, l2) => {
  let l1Arr = [];
  let l2Arr = [];

  l1Arr.push(l1.val)
  l2Arr.push(l2.val)

  while (l1.next !== null) {
      l1 = l1.next
      l1Arr.push(l1.val.toString())
  }
  while (l2.next !== null) {
      l2 = l2.next
      l2Arr.push(l2.val.toString())
  }

  const num1 = l1Arr.reverse().join('')
  const num2 = l2Arr.reverse().join('')
  const combinedNum = Number(num1) + Number(num2)
  const returnArr = ('' + combinedNum).split('')

  let returnList = returnArr.reduce((acc, val) => new ListNode(val, acc), null)

  return returnList
};