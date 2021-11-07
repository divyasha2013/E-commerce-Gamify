const urlParams = new URLSearchParams(window.location.search);
const catname = urlParams.get("category");

document.querySelector(".categoryName").textContent = catname;

const url = "https://kea-alt-del.dk/t7/api/products?category=" + catname;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    list(data);
  });

function list(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#productlistTemplate").content;
  const clone = template.cloneNode(true);

  clone.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} / ${product.brandname}`;

  clone.querySelector(
    "img.productlistImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  clone.querySelector("img.productlistImage").alt = product.productdisplayname;

  clone.querySelector("h3").textContent = product.productdisplayname;
  clone.querySelector(".price").textContent = `DKK ${product.price},-`;
  clone.querySelector("span.discounted").textContent = `DKK ${Math.round(
    product.price - (product.price * product.discount) / 100
  )},-`;
  clone.querySelector(".discounted p").textContent = `-${product.discount}%`;
  clone.querySelector("a").href = `product.html?id=${product.id}`;

  if (product.soldout) {
    clone.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    clone.querySelector("article").classList.add("onSale");
  }
  const parent = document.querySelector(".productlist");
  parent.appendChild(clone);
}
