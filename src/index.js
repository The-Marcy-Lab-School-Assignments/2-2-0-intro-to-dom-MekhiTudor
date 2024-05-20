const fromScratch = () => {
  const firstElement = document.createElement("h1");
  firstElement.id = "main-heading";
  firstElement.textContent = "Hello World!";
  const secondElement = document.createElement("p");
  secondElement.classList.add("boring-text");
  secondElement.id = "main-text";
  secondElement.textContent = "Look, I'm some text!";
  document.body.append(firstElement);
  document.body.append(secondElement);
};

fromScratch();
