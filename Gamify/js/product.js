const urlParams = new URLSearchParams(window.location.search);
// in the url grab id and store it's value in id
const id = urlParams.get("id");
const catname = urlParams.get("category");

document.querySelector(".categoryName").textContent = catname;

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".categoryName").textContent = product.category;
  document.querySelector(
    ".categoryName"
  ).href = `productlist.html?category=${product.category}`;
  document.querySelector(".productName").textContent =
    product.productdisplayname;

  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productImage").alt = product.productdisplayname;

  document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname;
  document.querySelector(
    ".purchaseBox p"
  ).textContent = `${product.category} / ${product.articletype}`;
  document.querySelector(".price").textContent = `DKK ${product.price},-`;

  if (product.soldout) {
    document.querySelector(".purchaseBox p").classList.add("soldProduct");
    document.querySelector(".purchaseBox p").textContent = "Sold Out";
    document.querySelector("button").textContent = "Notify me when in stock";
  }

  if (product.discount) {
    document.querySelector(".purchaseBox").classList.add("onSale");
    document.querySelector("span.discounted").textContent = `DKK ${Math.round(
      product.price - (product.price * product.discount) / 100
    )},-`;
  }

  document.querySelector("dd").textContent = product.season;
  document.querySelectorAll("dd")[1].textContent = product.basecolour;
  document.querySelectorAll("dd")[2].textContent = product.id;

  document.querySelector("h4").textContent = product.brandname;
  document.querySelector(".info p").textContent = product.brandbio;
}
