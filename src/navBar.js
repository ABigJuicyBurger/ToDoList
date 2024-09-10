import { projectList } from "./projectList.js";

export const navBar = () => {
  let navBar = document.querySelector("nav");

  navBar.classList.add("navbar");
  navBar.textContent = `
    <a href="#">Index</a>
    <a href="#">Today</a>
    <a href="#">This week</a>
  `;

  const projectsList = projectList();

  navBar.appendChild(projectsList);

  content.appendChild(navBar);

  return navBar;
};
