var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverse(head, k) {
  if (head == null) return null;
  var current = head;
  var next = null;
  var prev = null;

  var count = 0;

  while (count < k && current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }
  if (next != null) head.next = reverse(next, k);
  return prev;
}

function push(new_data) {
  new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

function printList() {
  temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
  console.log("");
}

push(9);
push(8);
push(7);
push(6);
push(5);
push(4);
push(3);
push(2);
push(1);

console.log("Given Linked List");
printList();

head = reverse(head, 4);

console.log("Reversed list");
printList();
