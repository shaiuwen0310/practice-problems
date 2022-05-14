/**
 * https://www.udemy.com/course/learning-data-structures-in-javascript-from-scratch/
 * 
 * 拆解 Linked List 建立步驟
 */


// --------------------------------------------------------------------------------------
// 1. Linked List and "Node" Constructor Functions

// 分別有哪些 properties
function LinkedList(){
    this.head = null
    this.tail = null
}

function Node(value, next, prev){
    this.value = value
    this.next = next
    this.prev = prev
}

// --------------------------------------------------------------------------------------
// 2. Add To Head: 在 head 增加一個 node
// 建立一個新的 node
// 判斷是加入已存在的 LinkedList，或沒有 LinkedList，改變 node 的 prev link 及 next link
// 無論 LinkedList 是否已存在，head 都會是新的 node
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    // this.head : 已存在的 LinkedList 之 head node
    // this.head.prev : 原本會是空的，要改成指向新的 node
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode
    this.head = newNode;
}
var LL = new LinkedList();
LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);

