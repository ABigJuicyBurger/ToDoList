export const main = () => {
  let content = document.querySelector("#content");

  let inbox = document.createElement("div");
  inbox.classList.add("inbox");
  inbox.innerHTML = `
    <h1>Inbox</h1>`;

  content.appendChild(inbox);

  return inbox;
};
