const getMainHeadingText = () => {
  const h1 = document.querySelector("#main-heading");
  console.log(h1.textContent);
};

const getAllMainText = () => {
  const arr = [];
  document
    .querySelectorAll(".main-text")
    .forEach((element) => arr.push(element.textContent));
  let str = arr.join(",");
  console.log(str);
};

const setSubtitleText = () => {
  const sub = (document.querySelector("#subtitle").innerHTML =
    "This is a subtitle!");
  console.log(sub);
};

const modifyDivClassList = () => {
  const list = document.getElementById("modify-classes").classList;
  list.add("new-class");
  list.remove("bad-class");
  console.log(list);
};

const addH2 = () => {
  const appPhrase = document.createElement("h2");
  appPhrase.innerHTML = "Another one!";
  appPhrase.id = "h2-test";
  document.body.appendChild(appPhrase);
};

const removeOldInfo = () => {
  const element = document.getElementById("old-info");
  element.remove();
};
//we want to read the data attribute from the ol
//the letters being A,B,C,D,E
//dataset.numLetters
const makeAlphabet = () => {
  const dataSet = document.querySelector("#alphabet").dataset.numLetters;
  for (let i = 0; i < dataSet; i++) {
    const letter = String.fromCharCode(65 + i);
    const element = document.createElement("li");
    element.innerHTML = `${letter} is letter #${i + 1} in the alphabet`;
    document.querySelector("#alphabet").appendChild(element);
  }
};

const makeBio = () => {
  const element = document.querySelector("#my-bio");
  element.innerHTML = ` 
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main();
