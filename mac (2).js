
let n = 6;
let a = [7, 1, 5, 3, 6, 4];
let maxProfit = 0;
let minPrice = a[0];
for (let i = 1; i < n; i++) {
  if (a[i] < minPrice) {
    minPrice = a[i];
  } else if (a[i] - minPrice > maxProfit) {
    maxProfit = a[i] - minPrice;
  }
}
console.log(maxProfit);
