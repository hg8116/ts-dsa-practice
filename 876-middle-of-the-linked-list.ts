// https://leetcode.com/problems/middle-of-the-linked-list/description/

/*
- Initialize slow and fast pointers to head.
- While fast.next.next:
    - Move fast two steps (fast = fast.next.next).
    - Move slow one step (slow = slow?.next).
- slow now points to the middle node.
- Return slow.
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    // @ts-ignore
    slow = slow.next
  }

  return slow
}
