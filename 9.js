function evaluatePostfix(exp) {
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let a = exp[i];

    if (!isNaN(parseInt(a))) stack.push(a.charCodeAt(0) - "0".charCodeAt(0));
    else {
      let val1 = stack.pop();
      let val2 = stack.pop();

      switch (a) {
        case "+":
          stack.push(val2 + val1);
          break;

        case "-":
          stack.push(val2 - val1);
          break;

        case "/":
          stack.push(val2 / val1);
          break;

        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }
  return stack.pop();
}

let pe = "23+4+";
console.log("postfix evaluation: " + evaluatePostfix(pe));
