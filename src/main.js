import { addTaskButton } from "./addTaskButton";
import { todoItemRequester } from "./todoItemRequester";

export const main = () => {
  let content = document.querySelector("#content");

  let inbox = document.createElement("div");
  inbox.classList.add("inbox");
  inbox.innerHTML = `
    <h1>Inbox</h1>`;

  let addButtontoMain = inbox.appendChild(addTaskButton());

  addButtontoMain.addEventListener("click", () => {
    addButtontoMain.remove();
    let addFieldsettoMain = inbox.appendChild(todoItemRequester()); // an expression: produces a value, in this case, an item
  });

  content.appendChild(inbox); // statement; performs an action

  return inbox;
};
