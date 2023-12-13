// https://leetcode.com/problems/reverse-linked-list/description/

/*
- Check if empty/single-node: Return if true.
- Set up: prev = null, current = head, next = head.next.
- Loop while current:
  - Reverse link: current.next = prev.
  - Move pointers: prev = current, current = next.
  - Safe advance: next = next?.next.
- Update head and return: head = prev, return reversed list.
*/

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let prev: ListNode | null = null
  let present: ListNode | null = head
  let next: ListNode | null = present.next

  while (present) {
    present.next = prev
    prev = present
    present = next
    // @ts-ignore
    next = next?.next
  }

  head = prev
  return head
}
