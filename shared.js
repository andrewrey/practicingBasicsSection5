const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const noButton = document.querySelector(".modal__actions button");

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
backdrop.addEventListener("click", closeModal);

// modal no button (close)
noButton.addEventListener("click", closeModal);
