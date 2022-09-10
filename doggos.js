const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const promise = fetch(BREEDS_URL);
const select = document.querySelector(`.breeds`);

promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const breedsObj = data.message;
    const breedsArr = Object.keys(breedsObj);

    for (let i = 0; i < breedsArr.length; i++) {
      const option = document.createElement(`option`);
      option.value = breedsArr[i];
      option.innerText = breedsArr[i];
      select.appendChild(option);
    }
  });

const img = document.querySelector(`.dog-img`);
const loading = document.querySelector(`.loading`);

select.addEventListener(`change`, function (event) {
  let imgUrl = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getBreed(imgUrl);
});

function getBreed(imgUrl) {
  loading.classList.add(`show`);
  img.classList.remove(`show`);
  fetch(imgUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      img.src = data.message;
      //   loading.classList.remove(`show`);
      //   img.classList.add(`show`);
    });
}

img.addEventListener(`load`, function () {
  loading.classList.remove(`show`);
  img.classList.add(`show`);
});
