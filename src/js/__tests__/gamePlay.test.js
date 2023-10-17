import Gameplay from "../gamePlay.js";
import { JSDOM } from "jsdom";

describe("Gameplay", () => {
  const dom = new JSDOM('<!doctype html><html><body><div class="field-container"></div></body></html>');
  global.document = dom.window.document;
  const game = new Gameplay();
  game.createField();
  game.placeCharacter();

  it("should initialize with default values", () => {
    expect(game.fieldSize).toBe(4);
    expect(game.totalCells).toBe(16);
    expect(game.characterPosition).toBeGreaterThanOrEqual(0);
    expect(game.characterPosition).toBeLessThan(16);
  });

  it("should create a 4x4 field", () => {
    const fieldItems = document.querySelectorAll(".field-item");
    expect(fieldItems.length).toBe(16);
  });

  it("should place character in a valid position", () => {
    const fieldItems = document.querySelectorAll(".field-item");
    const characterImage =
      fieldItems[game.characterPosition].querySelector("img");
    expect(characterImage).toBeTruthy();
  });

  it("should move character to a different position", () => {
    const initialPosition = game.characterPosition;
    game.moveCharacter();
    expect(game.characterPosition).not.toBe(initialPosition);
  });
});
