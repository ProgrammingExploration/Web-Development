var x = 1; // You can change, but you don't have to
let y = 1; // You can change, but you still don't have to
const z = 1; // You cannot change

if(z) { 
    console.log(z);
    // If z is not null or undefined this will run
} else {
    console.log(z);
}

if(z == 1 || y == 2) {
    // Or 
    console.log(x + y);
}

if(z == 1 && y == 2) {
    // And
    console.log(x + y);
}

switch(z) {
    case 0:
        console.log('z == 0')
    case 1:
        console.log('z == 1')
    case y:
        console.log('x == y')
} // Alternative to if statements

while(y == 1) {
    console.log(y);
    y++;
}

let isMarried = false;
while(!isMarried) {
    if(!isMarried) {
        break;
    }
    console.log("Not Married");
}

for(let x = 0; x <= 5; x++) {
    console.log(x);
}

const friends = ["Billy", "Bob", "Doug"];
console.log(friends[0])
for(let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}

// Goal is to get friend1 and friend2
const [friend1, friend2] = friends;
console.log(`${friend1} is my friend`);

const person = {
    name: "Om", 
    age: 13, 
    school: "Boulan Park"
};

console.log(person.name)

const { name, age, school } = person; // Must be name of propert
console.log(school);

const schools = ['Boulan', 'Baker', 'Larson'];
schools.map(s => {
    console.log(s);
})
schools.forEach((s, i) => {
    console.log(schools[i])
    console.log(s);
})

const map = (s) => {
    console.log(s);
}

schools.map(map); // Call the function and passes each value as a paramter

// const person = {
//     name: "Om", 
//     age: 13, 
//     school: "Boulan Park"
// };

const person2 = {
    ...person, 
    mom: "Mom",
    dad: 'Dad'
};
console.log(person2);

// const schools = ['Boulan', 'Baker', 'Larson'];
const highschools = [
    ...schools,
    'Troy High', 
    'Athens'
];
console.log(highschools);