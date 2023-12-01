


import { setRandomPosition } from "./move.js";
import { Fish, BadFish } from "./createFish.js";

import fish1 from "../image/fish1.png";
import fish2 from "../image/fish2.png";
import fish3 from "../image/fish3.png";
import fish4 from "../image/fish4.png";
import reset from "../image/reset.png";

import fish5 from "../image/fish5.png";

let clickableDivs = [];
let gameHeader = document.createElement("h2");
gameHeader.innerHTML = "Coral  Craft";

const fishImages = [fish1, fish2, fish3, fish4];
let aquariumSection = document.createElement("section");
aquariumSection.setAttribute("class", "aquarium-section");
let resetAqua = document.createElement("div");
resetAqua.setAttribute("class", "reset-aquarium");
let resetBtn = document.createElement("img");
resetBtn.setAttribute("class", ".resetBtn");
resetBtn.src = reset;
resetAqua.appendChild(resetBtn);
let count = 0;
let toggleButton = document.createElement("button");
toggleButton.setAttribute("id", "toggleFishMenu");


let fishSection = document.createElement("section");
fishSection.className = "select-fish";
fishSection.id = "fishMenu";

fishImages.forEach((fishImage, index) => {
  let goodFishDiv = document.createElement("div");
  goodFishDiv.className = "inner good";

  let goodFishImg = document.createElement("img");
  goodFishImg.src = fishImage;
  goodFishImg.alt = "";

  goodFishDiv.appendChild(goodFishImg);
  fishSection.appendChild(goodFishDiv);
});

let badFishDiv = document.createElement("div");
badFishDiv.className = "inner bad";

let badFishImg = document.createElement("img");
badFishImg.src = fish5;
badFishImg.alt = "";
badFishDiv.appendChild(badFishImg);
fishSection.appendChild(badFishDiv);
document.body.appendChild(fishSection);

let fishes = document.querySelectorAll(".good");
let badFish = document.querySelector(".bad");
let fishMenu = document.querySelector(".select-fish");
let countForMenu = 1;

resetAqua.appendChild(toggleButton);
resetAqua.appendChild(resetBtn);

let rotation = 0;
    

    function rotateImage() {
      rotation += 180;
      toggleButton.style.transform = `rotate(${rotation}deg)`;
    }

function changeHeaderColor() {
    const brightColors = ["#ff5252", "#ff9800", "#4caf50", "#2196f3", "#9c27b0"];
    const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];

    gameHeader.style.color = randomColor;
  }
  setInterval(changeHeaderColor, 1000);

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);

}

window.addEventListener("load", () => {
  for (let i = 0; i < 20; i++) {
    const random = getRandomIndex(fishImages);
    const randomImage = fishImages[random];
    let randomFish = new Fish(setRandomPosition, aquariumSection, randomImage);
    clickableDivs.push(randomFish.fish);
    setRandomPosition(aquariumSection, clickableDivs[i]);
  }
  console.log(clickableDivs);
});

document.addEventListener("DOMContentLoaded", function () {
  clickableDivs.forEach(function (fish) {
    setRandomPosition(aquariumSection, fish);
  });
});

clickableDivs.forEach(function (fish) {
  fish.addEventListener("click", function (event) {
    event.stopPropagation();
    setRandomPosition(aquariumSection, fish);
  });
});

setInterval(function () {
  clickableDivs.forEach(function (fish) {
    setRandomPosition(aquariumSection, fish);
  });
}, 5000);

fishes.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (clickableDivs.length > 20) {
      alert("The maximum size reached");
      fishes.forEach((elem) => elem.removeEventListener("click", () => {}));
      return;
    }
    let newFish = new Fish(
      setRandomPosition,
      aquariumSection,
      elem.querySelector("img").src
    );
    clickableDivs.push(newFish.fish);
    aquariumSection.appendChild(newFish.fish);
    console.log(clickableDivs);
    setRandomPosition(aquariumSection, newFish.fish);
  });
});

function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}
badFish.addEventListener("click", () => {
  let newBad = new BadFish(
    setRandomPosition,
    aquariumSection,
    badFish.querySelector("img").src
  );

  function detectCollisions() {
    const overlappingFish = clickableDivs.filter((fish) => {
      return (
        !fish.classList.contains("fish-bad") && isColliding(fish, newBad.fish)
      );
    });

    overlappingFish.forEach((overlappingFish) => {
      aquariumSection.removeChild(overlappingFish);
      clickableDivs = clickableDivs.filter((fish) => fish !== overlappingFish);

      newBad.increaseSize();
    });
  }

  if (count < 1) {
    count++;
    clickableDivs.push(newBad.fish);
    aquariumSection.appendChild(newBad.fish);
  }
  setRandomPosition(aquariumSection, newBad.fish);

  function animate() {
    detectCollisions();
    requestAnimationFrame(animate);
  }

  animate();
});

resetBtn.addEventListener("mousedown", () => {
  resetBtn.classList.add("click-animation");
  aquariumSection.innerHTML = "";
  clickableDivs.length = 0;
  count = 0;
});

resetBtn.addEventListener("mouseup", () => {
  resetBtn.classList.remove("click-animation");
});

resetBtn.addEventListener("mouseleave", () => {
  resetBtn.classList.remove("click-animation");
});

toggleButton.addEventListener("click", function () {
    rotateImage()
  fishMenu.style.display = countForMenu % 2 === 0 ? "none" : "flex";
  countForMenu++;
});

function createMain() {
  const main = document.createElement("main");
  main.setAttribute("class", "main");
  main.setAttribute("id", "products");
  main.appendChild(gameHeader);
  main.appendChild(aquariumSection);
  main.appendChild(resetAqua);

  main.appendChild(fishSection);

  return main;
}

export default createMain;
