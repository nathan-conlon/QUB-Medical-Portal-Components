const topLinks = [...document.querySelectorAll(".toplinks")];
const nav23Dropdowns = [...document.querySelectorAll(".nav23-dropdown")];
const plusMinus = [...document.querySelectorAll(".plus-minus")];
const burgerSwitchElement = document.querySelector(".burgerswitch");

function menuFunction() {
  const x = document.querySelector(".nav23-menu");
  x.classList.toggle("active");
  if (burgerSwitchElement.classList.contains("fa-bars")) {
    burgerSwitchElement.classList.remove("fa-bars");
    burgerSwitchElement.classList.add("fa-times");
    burgerSwitchElement.style.marginBottom = "10px";
  } else if (burgerSwitchElement.classList.contains("fa-times")) {
    burgerSwitchElement.classList.remove("fa-times");
    burgerSwitchElement.classList.add("fa-bars");
    burgerSwitchElement.style.marginBottom = "7px";
  }
}

const undoTopLinksHandler = () => {
  topLinks.forEach((link, i) => {
    link.removeEventListener("click", clickHandler);
    nav23Dropdowns[i].classList.remove("active");
  });
};

const clickHandler = (event) => {
  event.preventDefault();
  const index = topLinks.indexOf(event.currentTarget);
  nav23Dropdowns[index].classList.toggle("active");
  plusMinus[index].textContent === "–"
    ? (plusMinus[index].textContent = "+")
    : (plusMinus[index].textContent = "–");
  for (let j = 0; j < nav23Dropdowns.length; j++) {
    if (j !== index) {
      nav23Dropdowns[j].classList.remove("active");
      plusMinus[j].textContent = "+";
    }
  }
};

const topLinksHandler = () => {
  topLinks.forEach((link, i) => {
    link.addEventListener("click", clickHandler);
  });
};

const handleViewportChange = () => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth < 1000) {
    document.body.style.overflow = "visible";
    topLinksHandler();
  } else {
    document.body.style.overflow = "visible";
    nav23Dropdowns.forEach((dropdown) => {
      dropdown.style.removeProperty("display");
      undoTopLinksHandler();
    });
  }
};

window.addEventListener("resize", handleViewportChange);
handleViewportChange();
