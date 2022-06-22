class Node {
  constructor() {
    this.data = [];
    this.next = null;
  }
}

function push(head_r, newdata) {
  var new_node = new Node();
  new_node.data = newdata;
  new_node.next = head_r;
  head_r = new_node;
  return head_r;
}

function printList(head) {
  var temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
}

function merge(p, q) {
  var p_curr = p,
    q_curr = q;
  var p_next, q_next;

  while (p_curr != null && q_curr != null) {
    p_next = p_curr.next;
    q_next = q_curr.next;

    q_curr.next = p_next;
    p_curr.next = q_curr;

    p_curr = p_next;
    q_curr = q_next;
  }

  q = q_curr;
  return q;
}

var p = null,
  q = null;
p = push(p, 10);
p = push(p, 20);
p = push(p, 30);
console.log("First Linked List:");
printList(p);
q = push(q, 1);
q = push(q, 2);
q = push(q, 3);
q = push(q, 4);
q = push(q, 5);
console.log("Second Linked List:");
printList(q);
q = merge(p, q);
console.log("Modified First Linked List:");
printList(p);
// console.log("Modified Second Linked List:");
printList(q);
