export const footer = () => {
  const footer = document.querySelector("footer");
  footer.classList.add("footer");

  const footerInfo = document.createElement("div");
  footerInfo.classList.add("footerInfo");

  footer.textContent = "Copyright @ 2024 ABigJuicyBurger";

  const githubLogo = document.createElement("img");
  githubLogo.src =
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
  githubLogo.alt = "GitHub Logo";
  githubLogo.width = 20;
  githubLogo.height = 20;

  footerInfo.appendChild(githubLogo);

  footer.appendChild(footerInfo);

  return footer;
};
