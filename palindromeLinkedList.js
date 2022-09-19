function isPalindrome(head) {
    let current = head;
    let values = []
debugger
    while(current.next !== null) {
        values.push(current.val)
        current = current.next;
    }
    values.push(current.val)

    let x = 0;
    let y = values.length - 1;

    while ( x <= y ) {
        if (values[x] !== values[y]) {
            return false
        }
        x++;
        y--;
    }
    return true
};
