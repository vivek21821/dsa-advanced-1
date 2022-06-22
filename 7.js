const arr = [1, 2, 3, -2, -5, -7, 0];
let l = 0;
console.log(`input array : [${arr}] `);
for (let o = 0; o < arr.length; o++) {
  if (arr[o] < l) {
    if (o != l) {
      let temp = arr[o];
      arr[o] = arr[l];
      arr[l] = temp;
    }
    l++;
  }
}

console.log(`Negative numbers are moved to one side of an array : [${arr}]`);
