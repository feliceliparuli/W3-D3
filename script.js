const myForm = document.querySelector("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("invio del form");
  const newTaskInput = document.getElementById("new-task");
  console.log(newTaskInput.value);
  const taskList = document.createElement("li");
  taskList.innerHTML = `
  <p>${newTaskInput.value}</p>
    <button class="delete-btn">X</button>
  `;
  const deleteBtn = taskList.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => taskList.remove());
  taskList.addEventListener("click", () => {
    taskList.classList.toggle("completed");
  });

  document.getElementById("task-list").appendChild(taskList);
});
