//Task 1
var car={
    make:"toyota",
    model:"camry",
    year:2020
}
console.log(car);
Object.freeze(car);
car.model="honda";
console.log(car);

//Task 2
var user={
    name:"mahesh",
    age:22,
    email:"mahesh12@gmail.com"
}
console.log(user);
console.log(Object.isFrozen(user));

//Task 3
var product={
    name:"sofa",
    category:"furniture",
    price:2000
}
console.log(product);
console.log(Object.isSealed(product));

//Task 4
var laptop={
    brand:"HP",
    model:"Pavilian 15",
    price:50000
}
console.log(Object.keys(laptop));

//Task 5
var house={
    location:"New york city",
    size:"1200 sqft",
    price:950000
}
console.log(Object.values(house));

//Task 6
var smartphone={
    brand:"apple",
    model:"iphone 15 pro max",
    price:"$1,199"
}
console.log(smartphone);
Object.seal(smartphone);
smartphone.price="$2,199";
console.log(smartphone);
console.log(Object.isSealed(smartphone));

//Task 7
var book={
    title:"beloved",
    author:"toni morrison",
    publishedyear:1987
}
console.log(book);
Object.freeze(book);
book.publishedyear=1990;
console.log(book);
console.log(Object.isFrozen(book));

//Task 8
var person={
    firstname:"talluri",
    lastname:"mahesh",
    age:22
}
console.log(Object.keys(person),Object.values(person));

//Task 9
var course={
    title:"python",
    instructor:"john doe",
    duration:"6 weeks"
}
console.log(course);
console.log(Object.entries(course));
delete course.duration;
console.log(course);

//Task 10
var employee={
    name:"mahesh",
    position:"full-stack",
    salary:50000
}
console.log(employee);
Object.seal(employee);
employee.position="front-end";
console.log(employee);
console.log(Object.keys(employee));
console.log(Object.isSealed(employee));


