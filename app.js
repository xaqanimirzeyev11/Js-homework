const Human=require('./components/basehumen');
const techStaff=require('./components/techstaff.js');
const Teacher=require('./components/teacher.js');
const Student =require('./components/student.js');
const Mentor=require('./components/mentor.js');
const Finance = require('./components/finance');

 
const Xaqani=new Finance(
    name="Xaqani",
    surname="Mirzeyev",
    gender="M",
    position="accauntant",   

)

const Rauf=new Student(
    name="Rauf",
    surname="Bayramov",
    gender="M",
    contract=101010001,
    cls="Rapator"

)

const Humay=new Teacher(
    name="Humay",
    surname="Suleymanova",
    gender="F",
    contract=1111111,
)

const Sabina=new Teacher(
    name="Sabina",
    surname="Zeynalova",
    gender="F",
    contract=1111112,
)

const Turqut=new Mentor(
    name="Turqud",
    surname="Kerimli",
    gender="M",
    contract=1111113,
)

let staffArr=[]
staffArr.push(Xaqani,Rauf,Humay,Sabina,Turqut);

// const result=staffArr.filter(function(obj){
//     // return obj.name=="Xaqani"
//     // return obj.cls=="Rapator"
//     // return obj.name.length>4
// })

console.log(result);

console.log(Xaqani.introduce());
console.log(Rauf.introduce());
console.log(Humay.introduce());
console.log(Sabina.introduce());
console.log(Turqut.introduce());

console.log(staffArr);
