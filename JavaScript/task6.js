// Given an array of student objects, print each student’s name and marks.
//  [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

let students=[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for(let student of students){
  console.log(`Name:${student['name']},Marks:${student['marks']}`)
}

