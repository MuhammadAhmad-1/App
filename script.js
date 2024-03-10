const inputbox = document.getElementById("input");
const tasks = document.getElementById("ul");

function addTask(){
    if(inputbox.value === ''){
        alert("you must write something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHtml = inputbox.value;
        tasks.appendChild(li);
    }
}