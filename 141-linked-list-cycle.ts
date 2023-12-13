// https://leetcode.com/problems/linked-list-cycle/description/
// @ts-nocheck

function hasCycle(head: ListNode | null): boolean {
  // 1. Initialization:
  //    - Initialize two pointers, `slow` and `fast`, both pointing to the head of the linked list.
  let slow = head,
    fast = head

  // 2. Traversal:
  //    - Use a loop to traverse the linked list.
  //    - In each iteration, move the `fast` pointer two steps and the `slow` pointer one step.
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    // 3. Cycle Detection:
    //    - Check if `fast` and `fast.next` are not null before moving them.
    //      This ensures that you can move two steps without encountering a null pointer.
    //    - If at any point `fast` becomes equal to `slow`, it indicates the presence of a cycle. Return `true` in this case.
    if (fast === slow) return true
  }

  // 4. No Cycle Detected:
  //    - If the loop completes without finding a cycle, return `false`.
  return false
}
