class Gameplay {
  constructor() {
    this.fieldSize = 4;
    this.totalCells = this.fieldSize * this.fieldSize;
    this.characterPosition = Math.floor(Math.random() * this.totalCells);
    this.fieldContainer = document.querySelector(".field-container");
  }

  init() {
    this.createField();
    this.placeCharacter();

    setInterval(() => {
      this.moveCharacter();
    }, 1000);
  }

  createField() {
    for (let i = 0; i < this.totalCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("field-item");
      this.fieldContainer.appendChild(cell);
    }
  }

  getRandomPosition() {
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.totalCells);
    } while (newPosition === this.characterPosition);
    return newPosition;
  }

  placeCharacter() {
    const fieldItems = document.querySelectorAll(".field-item");
    const characterImage = document.createElement("img");
    characterImage.classList.add("character-image");
    fieldItems[this.characterPosition].appendChild(characterImage);
  }

  moveCharacter() {
    const newPosition = this.getRandomPosition();
    const fieldItems = document.querySelectorAll(".field-item");
    const characterImage =
      fieldItems[this.characterPosition].querySelector("img");
    fieldItems[this.characterPosition].innerHTML = "";
    fieldItems[newPosition].appendChild(characterImage);
    this.characterPosition = newPosition;
  }
}

export default Gameplay;
