const students = [
 {name:"A", marks:40},
 {name:"B", marks:60},
 {name:"C", marks:80}
];

let marks = students.filter(student=>student.marks>50);
let double = marks.map(student=> student.marks *2)
let totalMarks = double.reduce((total,mark)=> total + mark,0)
// console.log(marks)
// console.log(double)
// console.log(totalMarks)
console.log(totalMarks)