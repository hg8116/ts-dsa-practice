// https://leetcode.com/problems/sort-list/description/
// @ts-nocheck

// Function to sort a linked list using merge sort
function sortList(head: ListNode | null): ListNode | null {
  // Base case: If the list is empty or has only one node, it is already sorted
  if (head === null || head.next === null) return head

  // Find the middle of the list
  let mid = getMid(head)

  // Recursively sort the left and right halves of the list
  let left = sortList(head)
  let right = sortList(mid)

  // Merge the sorted left and right halves
  return merge(left, right)
}

// Function to merge two sorted linked lists
function merge(list1: ListNode, list2: ListNode): ListNode {
  // Initialize a dummy node to simplify the code
  let head = new ListNode()
  let curr = head

  // Compare values of nodes from list1 and list2, and merge them in sorted order
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1
      list1 = list1.next
    } else {
      curr.next = list2
      list2 = list2.next
    }
    curr = curr.next
  }

  // Append the remaining nodes from either list1 or list2
  curr.next = list1 ? list1 : list2

  // Return the merged sorted list
  return head.next
}

// Function to find the middle of a linked list and split it into two halves
function getMid(head: ListNode): ListNode {
  let midPrev = null

  // Use slow and fast pointers to find the middle
  while (head !== null && head.next !== null) {
    midPrev = midPrev === null ? head : midPrev.next
    head = head.next.next
  }

  // Save the middle node and disconnect the two halves
  let mid = midPrev.next
  midPrev.next = null

  // Return the middle node
  return mid
}
