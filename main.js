const divDogs = document.getElementById("dog-img-div");
const URL = 'https://dog.ceo/api/breeds/image/random';

const apiDogs = () => {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const imgDogs = data.message;
      divDogs.innerHTML = `<img src="${imgDogs}">`;
    })
    .catch(error => console.error("Error", error));
};

document.getElementById('button').addEventListener('click', apiDogs);
