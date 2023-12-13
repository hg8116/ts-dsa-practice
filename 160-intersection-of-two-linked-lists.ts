// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

// Function to find the intersection node of two linked lists
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // Initialize pointers for both linked lists
  let first = headA,
    second = headB

  // Loop until an intersection is found or both pointers reach the end (null)
  while (first !== second) {
    // Move the first pointer to the next node, or to the head of the second list if it reaches the end
    first = !first ? headB : first.next

    // Move the second pointer to the next node, or to the head of the first list if it reaches the end
    second = !second ? headA : second.next
  }

  // Return the intersection node (or null if there's no intersection)
  return first
}
