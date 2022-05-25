
const itemByTagName = document.querySelectorAll("body>ul>li");
console.log("Number of categories:", itemByTagName.length);

itemByTagName.forEach((item) => {
  console.log("Category:", item.children[0].textContent);

  console.log("Elements:", item.lastElementChild.children.length);
});