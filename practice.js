var a={
    name:"mahesh",
    age:22,
    batch:"19r"
}
console.log(a);

var b=new Object();
b.name="mahesh";
b.age=22;
b.batch="19r";
console.log(b);

var name="mahesh";
var age=22;
var c={name,age};
console.log(c);

var d={
    name:"mahesh",
    age:22,
    batch:"19r"
}
console.log(d);
console.log(Object.values(d));
console.log(Object.keys(d));
console.log(Object.entries(d));

var e={
       name:"mahesh",
        age:22,
        batch:"19r"
     }
console.log(e);
Object.freeze(e);
e.loc="ktp";
console.log(e);
console.log(Object.isFrozen(e));

var f={
    name:"mahesh",
     age:22,
     batch:"19r"
  }
console.log(f);
Object.seal(f);
f.loc="ktp";
f.age=30;
console.log(f);
console.log(Object.isSealed(f));

var g={
    name:"mahesh",
    age:22,
    batch:"19r"
    }
console.log(g);
Object.seal(g)
console.log(Object.isExtensible(g));

var a={
    name:"mahe",
    age:22,
    loc:"ktp",
    current:"hyd"
}
var b={
    name:"msd",
    age:40,
    loc:"chennai",
    team:"ind",
    bat:"right hand",
    field:"keeper"
}
c=Object.assign(a,b);
console.log(c);

var person={
    name:"kohli",
    proff:"cricket",
    bat:"riht hand"
}
console.log(person);

var man=Object.create(person);
man.name="ronaldo";
man.proff="football";
console.log(man.name);
console.log(man.proff);
console.log(man.bat);



