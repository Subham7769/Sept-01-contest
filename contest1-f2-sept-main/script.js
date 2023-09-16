const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
 data.forEach((element,index,list)=> console.log(data[index].name));
}

// 2. Add Data
function addData() {
  const newData = {
    name: prompt("Enter a name:"),
    age: parseInt(prompt("Enter an age:")),
    profession: prompt("Enter a profession:"),
  };
  data.push(newData);
  console.log("New data added:", newData);
}


// 3. Remove Admins
function removeAdmin() {
  data.forEach((element, index,list) =>{
    if(data[index].profession == "admin"){
     delete data[index]; 
    }
  });
  console.log("updated data:");
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  let arr = [];
 let arraySize = prompt("Enter Array size:");
 for (let i = 0; i < arraySize; i++) {
  arr.push(prompt("Enter Array Element " + i));
 }
 let newArray = data.concat(arr);
 console.log(newArray);
 
}

// 5. Average Age
function averageAge() {
  var age = 0;
  data.forEach((element, index)=>{
    age+=data[index].age;
  });
  let averageAge = age/data.length;
  console.log("Average age: "+averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  data.forEach((element,index)=>{
    if(data[index].age>25){
      console.log("AgeAbove25 :" + data[index].name);
    }
  });
}

// 7. Unique Professions
function uniqueProfessions() {

}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=>a.age-b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((element, index) => {
    if(data[index].name === "john"){
      let newProfession = prompt("Please enter new profession for john");
      data[index].profession = newProfession;
  console.log("updated profession: "+ newProfession);
    }
  });
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  var count = 0;
data.forEach((element, index) => {
  if(data[index].profession != null) {
    count++;
  }
});
console.log("profession counts: "+count);
}
