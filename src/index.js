import { header } from "./header.js";
import { TodoItemRequester } from "./todoItemRequester.js";
// import {AddList} from "./AddList.js"
// import { toDoItem } from "./TodoItems.js";
import { footer } from "./footer.js";
import { toDoItem } from "./TodoItems.js";

// import "./styles.css";

header();
console.log(TodoItemRequester);

document.body.appendChild(TodoItemRequester());
footer();

// toDoItem();
