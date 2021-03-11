const searchHotels = document.querySelector(".button__search__hotels");
const formHotels = document.querySelector(".form__search__hotels");
const dateInput = document.querySelectorAll(".input__date");
const form = document.querySelector(".form__search__hotels");
const search = document.querySelector(".form__search");

searchHotels.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (formHotels.classList.contains("show")) {
    formHotels.classList.remove("show")
  } else {
    formHotels.classList.add("show")
    formHotels.classList.add("animfadeIn")
  }
});

console.log(dateInput);

dateInput.forEach(function (input) {
  input.addEventListener("change", function (evt) {
    if (!this.value) {
      this.classList.add("modal__error")
    } else {
      this.classList.remove("modal__error")
    }
  });
});
