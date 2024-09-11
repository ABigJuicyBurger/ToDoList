export const addTaskButton = () => {
  // will need a button to add task to main or projects
  let addTaskButton = document.createElement("button");
  addTaskButton.classList.add("addTaskButton");

  let addTaskButtonLogo = document.createElement("img");
  addTaskButtonLogo.src = "./assets/addTask.png";
  addTaskButton.appendChild(addTaskButtonLogo);

  addTaskButton.innerHTML = `Add Task`;

  return addTaskButton;
};
