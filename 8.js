class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
    this.push = (element) => {
      this.items.push(element);
      this.length += 1;
    };
    this.pop = () => {
      if (this.length === 0) {
        return -1;
      }
      this.length -= 1;
      return this.items.pop();
    };
    this.peek = (element) => {
      if (this.length === 0) {
        return -1;
      }
      return this.items[this.length - 1];
    };
    this.reverse = (str) => {
      for (let i = 0; i < str.length; i++) {
        s.push(str[i]);
      }

      for (let o = 0; o < str.length; o++) {
        let ch = this.pop();
        str[o] = ch;
      }
    };
  }
}

let k = new Stack();
let str = "Amaterasu";

console.log("orginal string:", str);

str = str.split("");

k.reverse(str);

str = str.join("");

console.log("Reversed String:", str);
