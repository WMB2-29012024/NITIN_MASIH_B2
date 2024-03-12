
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
const s = "{[()]}";
function validParentheses(s){
const stack = new Stack(s.length)
  for (let i = 0; i < s.length; i++) {
   const currentChar = s[i]
    if(currentChar==="[" ||currentChar === "{" || currentChar==="("){
      stack.stackPush(currentChar)
    }else{
      const peekElement = stack.peek();
      if (!stack.isEmpty() && ((currentChar === ']' && peekElement === '[')||(currentChar===')' &&peekElement === '(') || (currentChar==='}' && peekElement === '{'))) {
        stack.stackPop()
      }else{
        return false
      }
      console.log(stack)
    }

}
return stack.isEmpty()
}
console.log(validParentheses(s))
