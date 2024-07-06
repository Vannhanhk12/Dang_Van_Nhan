// Assume that n is a positive integer.

// solution 1:
export function sum_to_n_loop(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// Time complexity: O(n)
// Space complexity: O(1)

// solution 2:
export function sum_to_n_recursive(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_recursive(n - 1);
}
// Time complexity: O(n)
// Space complexity: O(n)

// solution 3:
export function sum_to_n_equation(n: number): number {
  return (n * (n + 1)) / 2;
}
// Time complexity: O(1)
// Space complexity: O(1)
