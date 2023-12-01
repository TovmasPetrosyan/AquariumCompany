export function setRandomPosition(aquariumSection, element) {
    let maxX = aquariumSection.offsetWidth - element.offsetWidth;
    let maxY = aquariumSection.offsetHeight - element.offsetHeight;
  
    if (maxX < 0) {
      maxX = 0;
    }
  
    if (maxY < 0) {
      maxY = 0;
    }
  
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    if (element.classList.contains("fish-bad")) {
      // Get the current scale factor
      let currentScale = 1;
      if (element.style.transform) {
        const match = element.style.transform.match(/scale\(([^)]+)\)/);
        if (match) {
          currentScale = parseFloat(match[1]);
        }
      }
  
      // Apply the new position with the current scale factor
      element.style.transform = `translate(${randomX}px, ${randomY}px) scale(${currentScale})`;
    } else {
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  }
  