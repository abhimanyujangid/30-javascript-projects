const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // create a li element in html
        listContainer.appendChild(li); //for display
        let span = document.createElement("span");  // create a span element 
        span.innerHTML = "\u00d7"; // cross item code
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// This function is for checking or deleting tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save the data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show saved tasks
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
