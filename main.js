/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// For Sell.html

const chooseFile = document.getElementById("file");
const img = document.getElementById("img");

chooseFile.addEventListener("change", () => {
  getImgData();
});

function getImgData() {
  const files = chooseFile.files[0];

  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);

    fileReader.addEventListener("load", function () {
      img.innerHTML = '<img src="' + this.result + '" />';
    });
  }
}

// New Property

function addProperty() {
  let pName = document.getElementById("pName").value;
  let pPrice = document.getElementById("pPrice").value;
  let pDescription = document.getElementById("pDescription").value;

  let article = document.createElement("article");
  article.setAttribute("class", "product__card");
  console.log(article);

  var name = document.createElement("h3");
  name.setAttribute("class", "product__title");
  name.innerText = pName;


  var img = document.createElement('img');
  img.setAttribute('class', 'product__img')
  
  if(chooseFile.files && chooseFile.files[0]) {
    img.src = URL.createObjectURL(chooseFile.files[0]);
    article.appendChild(img);
  }



  var price = document.createElement("span");
  price.setAttribute("class", "product__price");
  price.innerText = pPrice + 'L';

  var description = document.createElement("p");
  description.setAttribute("class", "product__description");
  description.innerText = pDescription;

  // article.appendChild(image)
  article.appendChild(name);
  article.appendChild(price);
  article.appendChild(description);

  document.getElementById("pContainer").appendChild(article);


  alert('Your Property has been added!')
}
