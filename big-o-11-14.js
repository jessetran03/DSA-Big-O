// 11. Towers of Hanoi

function moveTower(numDisks, start, middle, end) {
  if (numDisks === 0) {
    return
  }
  moveTower(numDisks - 1, start, end, middle)
  console.log(`Moved Disk ${numDisks} from ${start} to ${end}`)
  moveTower(numDisks - 1, middle, start, end)
}

moveTower(4, 'Rod A', 'Rod B', 'Rod C')

/*

3 disks: 7 moves
4 disks: 15 moves
5 disks: 31 moves

Runtime of algorithm: n(2^n)

// 13: Recursive Big O

  1. O(n)
  2. O(n)
  3. O(n)
  4. O(n)
  5. O(n)
  6. O(n)
  7. O(n)

// 14: Iterative Big O

  1. O(n)
  2. O(1)
  3. O(n)
  4. O(n)
  5. O(n)
  6. O(n)
  7. O(n)

*/