let name = document.querySelector(".theName");
let picture = document.querySelector(".thePicture");
let type = document.querySelector(".theType");

let randAnimal = {};

let fetchData = async () => {
  try {
    let response = await fetch(
      "https://zoo-animal-api.herokuapp.com/animals/rand"
    );

    let data = await response.json();
    picture.src = `${data.image_link}`;
    name.textContent = `Name: ${data.name}`;
    type.textContent = `Type: ${data.animal_type}`;
  } catch (err) {
    console.log(err);
  }
};

fetchData();
