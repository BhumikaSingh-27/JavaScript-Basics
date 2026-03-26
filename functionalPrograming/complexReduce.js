// 6. Write an ES6 function that takes an array of objects with name, salary, role and workExperience, and returns a new array with an incremented salary of 1000. Also add a property **`isSenior`** as true for employees who have been working for more than equal to 3 years.

const employees = [
  { name: "Raju", salary: 1500, role: "dev", workExperience: 3 },
  { name: "Aakash", salary: 2000, role: "dev", workExperience: 3 },
  { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2.5 },
  { name: "Mohan", salary: 2000, role: "dev", workExperience: 2 },
  { name: "Ramesh", salary: 3070, role: "pm", workExperience: 3 },
  { name: "Jiten", salary: 4800, role: "qa", workExperience: 3 },
];

const updateEmployee = (emp) => {
  //approach
  //1. if something needs to be updated for all the objects of again (eg any one property of the object)
  //2. and if someting we can add later, we can use reduce or using map also we can do

  return emp
    .map((ele) => ({ ...ele, salary: ele.salary + 1000 }))
    .reduce(
      (acc, cur) =>
        cur.workExperience >= 3
          ? [...acc, { ...cur, isSenior: true }]
          : [...acc, cur],
      [],
    );
};

console.log(updateEmployee(employees));

//====================================
// 7. Write an ES6 function that takes an object of two arrays of objects with name, salary, role and workExperience, and returns a new array of employees having a role as QA in all teams

const teams = {
  team1: [
    { name: "Alice", salary: 50000, role: "engineer", workExperience: 2 },
    { name: "Bob", salary: 75000, role: "QA", workExperience: 5 },
    { name: "Charlie", salary: 60000, role: "developer", workExperience: 3 },
  ],
  team2: [
    { name: "David", salary: 55000, role: "engineer", workExperience: 3 },
    { name: "Eve", salary: 80000, role: "QA", workExperience: 4 },
    { name: "Frank", salary: 65000, role: "developer", workExperience: 2 },
  ],
};
