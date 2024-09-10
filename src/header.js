export const header = () => {
  const header = document.querySelector("header");
  header.classList.add("header");

  const headerInfo = document.createElement("div");
  headerInfo.classList.add("headerInfo");

  headerInfo.innerHTML = `
    <h1>To Do List</h1>
  `;

  const headerPic = document.createElement("img");
  // headerPic.src =
  // "https://cdn.pixabay.com/photo/2016/03/27/18/10/work-1283624_960_720.png";
  // headerPic.alt = "To Do List";
  // headerPic.width = 200;
  // headerPic.height = 200

  headerInfo.appendChild(headerPic);

  header.appendChild(headerInfo);

  return header;
};
