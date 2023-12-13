// https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

/*
GitHub Copilot: Sure, here's the explanation in bullet format:

- The `findPages` function is designed to find the minimum maximum number of pages that can be assigned to `m` students.

- The function starts by checking if the number of books `n` is less than the number of students `m`. If it is, it returns -1 because it's not possible to assign at least one book to each student.

- It initializes `start` and `end` pointers to the number of pages in the first book and the total number of pages in all books, respectively. These represent the minimum and maximum possible maximum number of pages that can be assigned to a student.

- It also initializes `ans` to -1. This variable will hold the minimum maximum number of pages found so far.

- It enters a `while` loop that continues until `start` is less than or equal to `end`.

- Inside the loop, it calculates the middle value (`mid`) of the current search range, which represents a potential maximum number of pages that can be assigned to a student.

- It then checks if it's possible to assign the books to `m` students with a maximum of `mid` pages per student by calling the `assignBooks` function.

  - If it is, it means a smaller maximum might be possible, so it updates `ans` to `mid` and updates `end` to `mid - 1`.

  - If it's not possible, it means the maximum is too small, so it updates `start` to `mid + 1`.

- The loop continues, narrowing down the search range until `start` is not less than or equal to `end`.

- Finally, the function returns `ans`, which is the minimum maximum number of pages that can be assigned to a student.

- The `assignBooks` function is used to check if it's possible to assign the books to `m` students with a maximum of `mid` pages per student.

  - It starts by assigning the first book to the first student and then iterates over each remaining book.

  - For each book, it checks if the number of pages in the book is more than `mid` or if assigning the book to the current student would exceed `mid`. If either is true, it assigns the book to a new student.

  - If it needs more than `m` students to assign the books in this way, it returns `false`. Otherwise, it returns `true`.
*/

function findPages(a: number[], n: number, m: number): number {
  if (n < m) return -1
  let start = a[0],
    end = 0
  a.forEach((el) => (end += el))

  let ans = -1

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)
    if (assignBooks(a, m, mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return ans
}

function assignBooks(a: number[], m: number, mid: number): boolean {
  let pageCount = 0,
    studentCount = 1
  for (let i = 0; i < a.length; i++) {
    if (a[i] > mid) return false
    if (a[i] + pageCount > mid) {
      studentCount++
      pageCount = a[i]
    } else {
      pageCount += a[i]
    }
  }

  if (studentCount > m) return false
  return true
}
