export const header = () => {
  const header = document.querySelector("header");
  header.classList.add("header");

  const headerInfo = document.createElement("div");
  headerInfo.classList.add("headerInfo");

  headerInfo.innerHTML = `
    <h1>To Do List</h1>
  `;

  const headerPic = document.createElement("img");
  headerPic.classList.add("headerPic");

  headerInfo.appendChild(headerPic);

  header.appendChild(headerInfo);

  return header;
};
