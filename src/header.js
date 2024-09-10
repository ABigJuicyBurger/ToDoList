export const header = () => {
  const header = document.querySelector("header");
  header.classList.add("header");
  header.textContent = `
    <h1>To Do List</h1>
  `;

  return header;
};
