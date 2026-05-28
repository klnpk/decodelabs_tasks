/* ADD TASK */

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {

    const taskInput =
    document.getElementById("taskInput");

    const taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";



    /* COMPLETE TASK */

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });



    /* DELETE TASK */

    li.querySelector(".deleteBtn")
    .addEventListener("click", () => {

        li.remove();

    });

});



/* DARK MODE */

const modeBtn =
document.getElementById("modeBtn");

modeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});