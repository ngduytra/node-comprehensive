const g = function*(i) {
    console.log(i+2);
    console.log(i +3);
    yield i+1
}

const a = g(5)

console.log(a.next());
console.log(a.next());