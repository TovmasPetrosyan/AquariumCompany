export class Fish {
    constructor(setRandomPosition, aquariumSection, imageSrc) {
      this.fish = this.createFish(setRandomPosition, aquariumSection, imageSrc);
      this.scaleFactor = 1;
    }
  
    createFish(
      setRandomPosition,
      aquariumSection,
      imageSrc,
      className = "fish",
      shouldAppend = true
    ) {
      let newFish = document.createElement("div");
      newFish.className = className;
      let fishImage = this.createFishImage(imageSrc);
      newFish.draggable = false;
      newFish.appendChild(fishImage);
     
  
      if (shouldAppend) {
        aquariumSection.appendChild(newFish);
      }
      newFish.addEventListener("click", function (event) {
        event.stopPropagation();
        setRandomPosition(aquariumSection, newFish);
      });
      this.fish = newFish;
      return newFish;
    }
  
    createFishImage(imageSrc) {
      let fishImage = document.createElement("img");
      fishImage.src = imageSrc;
      fishImage.draggable = false
      return fishImage;
    }
  }
  
  export class BadFish extends Fish {
    constructor(setRandomPosition, aquariumSection, imageSrc) {
      super(setRandomPosition, aquariumSection, imageSrc);
    }
  
    createFish(setRandomPosition, aquariumSection, imageSrc) {
      return super.createFish(
        setRandomPosition,
        aquariumSection,
        imageSrc,
        "fish-bad",
        false
      );
    }
  
    increaseSize() {
      
      this.scaleFactor += 0.1; 
      this.fish.style.transform = `scale(${this.scaleFactor})`;
      console.log(this.scaleFactor);
    }
  }
  