export const projectList = () => {
  const projectsList = document.createElement("div");
  projectsList.classList.add("projectsList");

  const projectsListTitle = document.createElement("h2");
  projectsListTitle.textContent = "Projects";
  projectsList.appendChild(projectsListTitle);

  let projectsListOrganizer = document.createElement("ul");
  projectsListOrganizer.classList.add("projectsListOrganizer");
  projectsList.appendChild(projectsListOrganizer);

  let sampleProject = document.createElement("ul");
  sampleProject.classList.add("sampleProject");
  projectsListOrganizer.appendChild(sampleProject);

  return projectsList;
};
