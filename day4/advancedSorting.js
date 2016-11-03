var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function sortName(input) {
  input.sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB){
      return -1;
    }
    if (nameA > nameB){
      return 1;
    }

    // Age before Beauty
    return b.age - a.age;
  });
  return input;
}

console.log(sortName(students));