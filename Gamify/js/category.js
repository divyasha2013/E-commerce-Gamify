fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(gotData);

// loop through
function gotData(data) {
  data.forEach(showCategory);
}
function showCategory(cat) {
  console.log(cat);
  const template = document.querySelector("#chooseCategory").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = cat.category;
  copy.querySelector("a").href = `productlist.html?category=${cat.category}`;
  copy.querySelector("img").src = `images/${cat.category}.jpg`;
  const parent = document.querySelector(".category");
  parent.appendChild(copy);
}
