// ques 01
How can you add a class name to addBtn ? (Do some research on it)

const addBtn = document.getElementById("add-btn");
1.addBtn.className = "btn-primary";
2.addBtn.classList.add('btn-primary')
3.addBtn.setAttribute('class', 'btn-primary')

//3 tai ans

// ques 2
// let str = "";
// What will be the value of !!str?
// ans: false

// ques 4
// const person = {name: "hero", id: 101, address: "BD",postalCode: 40321};
// How will you find out the numbers of properties present in an object person?
// ans
// console.log(Object.keys(person).length);


//quiz5
// const animals = ['cat', 'dog', 'rat'];
// console.log(animals.includes('Cat'));
// What will be the output?
//ans false

//ques 8
// const b=6 , b=6
// console.log(b);
// If you run the above code, which type of error will you get?
//ans assignment error


//10
// What would be the output?

// const colors = {mango: 'green', grapes: 'black', organe: 'yellow'};
// console.log(colors[grapes])

//uncaught reference error