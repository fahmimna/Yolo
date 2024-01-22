// let fruits = ["apple", "orange", "cherry"]
// fruits.push("date")
// console.log(fruits.length)

// for (let i = 0; i < 5; i++) {
//     console.log([i])
// }

// function multiply(a, b=2) {
//     return a*b
// }
// console.log(multiply(3))

// let numbers = [1,2,3,4,5]
// let [first, second, ...rest] = numbers
// console.log(second)

// const compute = (n) => n * n
// console.log(compute(4)) 

// let person = {
//     name: 'Bob',
//     age: 25,
// }
// let { name, age } = person
// console.log(age)

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Sara"/>