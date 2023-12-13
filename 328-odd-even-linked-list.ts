// https://leetcode.com/problems/odd-even-linked-list/description/
// @ts-nocheck

// Function to rearrange a linked list such that all odd-indexed nodes
// appear before even-indexed nodes, while maintaining the relative order
function oddEvenList(head: ListNode | null): ListNode | null {
  // Base case: If the list is empty or has only one node, no rearrangement is needed
  if (!head || !head.next) return head

  // Initialize pointers for odd and even nodes
  let odd = head
  let even = head.next

  // Save the head of the even list to connect it later
  let evenHead = even

  // Traverse the list, rearranging nodes by skipping every second node
  while (even && even.next) {
    // Move odd pointer to the next odd node
    odd.next = odd.next.next

    // Move even pointer to the next even node
    even.next = even.next.next

    // Move both pointers to the next positions
    odd = odd.next
    even = even.next
  }

  // Connect the last odd node to the head of the even list
  odd.next = evenHead

  // Return the rearranged list
  return head
}
