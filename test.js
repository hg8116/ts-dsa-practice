function solution(a, b) {
  let count = 0
  for (let i = a + 1; i <= b; i++) {
    if (helper(i)) count++
  }

  return count
}

function helper(num) {
  const numString = num.toString()

  let sumEven = 0
  let sumOdd = 0

  for (let i = 0; i < numString.length; i++) {
    const digit = parseInt(numString[i])

    if (i % 2 === 0) sumEven += digit
    else sumOdd += digit
  }

  return sumEven % 2 === sumOdd % 2
}

console.log(solution(8, 13))
