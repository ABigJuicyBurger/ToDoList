import { header } from "./header.js";
import { TodoItemRequester } from "./todoItemRequester.js";
import { navBar } from "./navBar.js";
// import {AddList} from "./AddList.js"
// import { toDoItem } from "./TodoItems.js";
import { main } from "./main.js";
import { footer } from "./footer.js";
// import { toDoItem } from "./TodoItems.js";

import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  header();
  navBar();
  main();
  footer();
});

// When user clicks on add task button in main, it will open a modal
// to add task to main or projects

// toDoItem();
