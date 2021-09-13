var foo = toggleTodo({
    id: 1,
    text: '…',
    done: true
});
function toggleTodo(foo) {
    return {
        id: foo.id,
        text: foo.text,
        done: !foo.done
    };
}
console.log('Expected:');
console.log("{ id: 1, text: '\u2026', done: false }");
console.log('Actual:');
console.log(foo);
