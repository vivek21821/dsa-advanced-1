let arr = [12, 3, 5, 7, 19];
let n = arr.length;
const p = 5;
let smallest, largest;

arr.sort((a, b) => a - b);

console.log(arr); // 3,5,7,12,19

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < p) {
    smallest = arr[i];
  }
  if (arr[i] > p) {
    largest = arr[i];
    break;
  }
}

if (p >= arr[arr.length - 1]) {
  largest = "not available in array";
}
if (p <= arr[0]) {
  smallest = "not available in array";
}

console.log("value of p:", p);
console.log("Kth(p=" + p + ")'s" + " smallest:", smallest);
console.log("Kth(p=" + p + ")'s" + " largest:", largest);
