// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// @ts-nocheck

/*
- Count list length: Loop and count nodes.
- Base cases:
    - n == 0 || !head: return head (no change).
    - n == count: return head.next (remove first node).
- Find node before target:
    - Loop count - n - 1 times.
    - Move curr pointer one step each time.
- Remove target node:
    - Skip the target node by setting curr.next to its next.
- Return modified list:
    - Return the updated head with the target node removed.
*/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let count = 0
  let curr: ListNode | null = head
  while (curr) {
    count++
    curr = curr.next
  }

  if (n == 0 || !head) return head
  if (n == count) return head.next

  let i = 0
  curr = head
  while (i < count - n - 1) {
    curr = curr.next
    i++
  }

  curr.next = curr.next.next
  return head
}
