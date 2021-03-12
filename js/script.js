const searchHotels = document.querySelector(".button__search__hotels");
const formHotels = document.querySelector(".form__search__hotels");
const dateInput = document.querySelectorAll(".input__date");
const search = document.querySelector(".form__search");
const buttonSearch = document.querySelector(".button__submit__search__hotels")

searchHotels.addEventListener("click", (evt) => {
  evt.preventDefault();
  formHotels.classList.toggle("no__show");
  formHotels.classList.add("animfadeIn")
});

formHotels.classList.add("no__show");


dateInput.forEach(function (input) {
  input.addEventListener("change", function (evt) {
    if (!this.value) {
      this.classList.add("modal__error")
    } else {
      this.classList.remove("modal__error")
    }
  });
});

buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
});
