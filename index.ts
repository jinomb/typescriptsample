type Todo = {
    id: number
    text: string
    done: boolean
}

const foo: Todo = toggleTodo({
  id: 1,
  text: '…',
  done: true
})

function toggleTodo(foo: Todo): Todo {
    return {
        id: foo.id,
        text: foo.text,
        done: !foo.done
    }
}

console.log('Expected:')
console.log(`{ id: 1, text: '…', done: false }`)
console.log('Actual:')
console.log(foo)