const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const noButton = document.querySelector(".modal__actions button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

// Functions //

// Close function

const closeModal = () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
};

// Event Listeners //

// choose plan buttons
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

// backdrop (close)
backdrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  closeModal();
});

// modal no button (close)
noButton.addEventListener("click", closeModal);

// toggleButton (open mobile nav)
toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
