const { createPriorityQueue } = require('./priority_queue')

const q = createPriorityQueue()

q.enqueue('1. item')
q.enqueue('2. item')
q.enqueue('3. item')

q.dequeue()
q.enqueue('very important', true)
console.log(q.dequeue())
console.log(q.peek())

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Priority Queue Example</h2>
      <p>result for dequeue: ${q.dequeue()}</p>
      <p>result for peek: ${q.peek()}</p>
    `

