class ListNode{

    constructor(val){

        this.val = val

        this.next = null

    }
}
 

function getNode(data){

    let temp = new ListNode(data)

    temp.next = null

    return temp
}
 


function printList(head){

    while (head.next){

        document.write(head.val,' -> ')

        head = head.next

    }

    document.write(head.val,'')
}
 


function removeZeroSum(head, K){
 


    let root = new ListNode(0)
 


    root.next = head
 



    let umap = new Map();
 

    umap.set(0,root)
 


    let sum = 0
 



    while (head != null){
 

      

        sum += head.val
 

        

        if (umap.has(sum - K) == true){
 

            let prev = umap.get(sum - K)

            let start = prev
 

          

            let aux = sum
 

            

            sum = sum - K
 

            

            while (prev != head){

                prev = prev.next

                aux += prev.val

                if (prev != head)

                    umap.delete(aux)

            }
 

        
            start.next = head.next

        }
 

     

        else

            umap.set(sum,head)
 

        head = head.next

    }
 

  

    return root.next
}
 
 

let head = getNode(1)
head.next = getNode(2)
head.next.next = getNode(-3)
head.next.next.next = getNode(3)
head.next.next.next.next = getNode(1)
 

let K = 5
 

head = removeZeroSum(head, K)
 


if(head != null)

    printList(head)