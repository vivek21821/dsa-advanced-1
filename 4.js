const arr = [1, 5, 7, -1, 5];
const sum = 7;
let count = 5;
console.log("Pairs of sum", sum, ":");

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 2; j < arr.length; j++) {
    if (arr[i] + arr[j] === sum) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

console.log("total pairs:", count);
