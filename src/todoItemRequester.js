export const todoItemRequester = () => {
  let itemProperties = 7;
  let propertyNames = [
    "title",
    "description",
    "dueDate",
    "priority",
    "notes",
    "checklist",
  ];

  let fieldset = document.createElement("fieldset");
  fieldset.classList.add("fieldset");
  fieldset.style.width = "400px";

  let form = document.createElement("form");
  form.classList.add("form");

  for (let i = 0; i < itemProperties; i++) {
    let propertyDiv = document.createElement("div");
    propertyDiv.classList.add("propertydiv");
    form.appendChild(propertyDiv);

    let label = document.createElement("label");
    label.classList.add("label");
    label.textContent = propertyNames[i];
    propertyDiv.appendChild(label);

    let input = document.createElement("input");
    input.classList.add("input");
    input.type = "text";
    input.placeholder = "Enter item";
    input.name = "item";
    propertyDiv.appendChild(input);

    fieldset.appendChild(form);
  }
  return fieldset;
};
