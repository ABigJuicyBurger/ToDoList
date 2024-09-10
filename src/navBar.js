import { projectList } from "./projectList.js";

export const navBar = () => {
  let navBar = document.querySelector("nav");

  navBar.classList.add("navbar");
  navBar.innerHTML = `
    <button href="#">Index</buton>
    <button href="#">Today</button>
    <button href="#">This week</button>
  `;

  const projectsList = projectList();

  navBar.appendChild(projectsList);

  content.appendChild(navBar);

  return navBar;
};
