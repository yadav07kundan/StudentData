
const btn = document.getElementById("btn");
const input = document.getElementById("in");
const list = document.getElementById("lst");

btn.addEventListener("click", ()=> {
        let li = document.createElement("li");
        li.textContent = input.value; 
        list.appendChild(li);
        input.value="";
});
const btn1=document.getElementById("btnclr");
btn1.addEventListener("click", ()=>{
    document.body.style.backgroundColor="yellow";
});

const students = [
    { name: "John Doe", age: 20, course: "Computer Science" },
    { name: "Jane Smith", age: 22, course: "Information Technology" },
    { name: "Sam Wilson", age: 19, course: "Data Analytics" }
];

const table = document.getElementById("studentTable");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = ["Name", "Age", "Course"];
headers.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
students.forEach(student => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;

    const ageCell = document.createElement("td");
    ageCell.textContent = student.age;

    const courseCell = document.createElement("td");
    courseCell.textContent = student.course;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(courseCell);

    tbody.appendChild(row);
});
table.appendChild(tbody);
