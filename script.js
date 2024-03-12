
class Stack {
  constructor(size) {
    this.stack = [];
    this.maxSize = size
    this.stackSize = 0
  }

  peek() {
    // return the last element
    // without removing it from stack
    if (this.stackSize === 0) {
      return "stack is empty"
    } else {
      const lastElem = this.stackPop()
      this.stackPush(lastElem)
      return lastElem
    }
  }
  isEmpty() {
    return this.stackSize === 0;
  }
  stackPush(item) {
    if (this.stackSize >= this.maxSize) {
      return new Error("stack overflow")
    }
    this.stack.push(item)
    this.stackSize += 1
    return this.stackSize
  }
  stackPop() {
    if (this.stackSize === 0) {
      return new Error("stack overflow")
    }
    this.removedItem = this.stack.pop()
    this.stackSize -= 1
    return this.removedItem
  }
}
const s = "Hello, World!"
function reverseString(s) {
   const stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    stack.stackPush(element)
  }
   
 let ans = ""
   while(!stack.isEmpty()){
   ans+= stack.stackPop()
   }
   return ans
}
console.log(reverseString(s))