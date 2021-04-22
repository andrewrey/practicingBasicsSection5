const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const noButton = document.querySelector(".modal__actions button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const ctaButton = document.querySelector(".main-nav__item--cta");

// Functions //

// remove preload class once window loads

window.addEventListener("load", () =>
  modal ? modal.classList.remove("preload") : null
);

// Close function

const closeModal = () => {
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
};

// Event Listeners //

// choose plan buttons
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";

    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

// backdrop (close)
backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  closeModal();
});

// modal no button (close)

if (noButton) {
  noButton.addEventListener("click", closeModal);
}

// toggleButton (open mobile nav)
toggleButton.addEventListener("click", () => {
  mobileNav.className += " open";
  backdrop.className += " open";
});

// cta button animation listener
ctaButton.addEventListener("animationstart", (event) =>
  console.log("Animation Started", event.target)
);

ctaButton.addEventListener("animationend", (event) =>
  console.log("Animation Ended", event.target)
);
