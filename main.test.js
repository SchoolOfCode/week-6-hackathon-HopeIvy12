import { describe, expect, test } from "vitest";
import { myOrganizedDeck } from "./main";

let Pokedex = [
  { name: "Charizard", baseStat: 534 },
  { name: "Squirtle", baseStat: 314 },
  { name: "Bulbasaur", baseStat: 318 },
  { name: "Ivysaur", baseStat: 405 },
  { name: "Charmander", baseStat: 309 },
  { name: "Pikachu", baseStat: 320 },
];

describe("New boosted and organized Pokemon test", () => {
  test("Applies energy boosts before sorting", () => {
    const expected = [
      { name: "Charizard", baseStat: 584 }, // baseStat + 50
      { name: "Ivysaur", baseStat: 455 }, // baseStat + 50
      { name: "Pikachu", baseStat: 370 }, // baseStat + 50
      { name: "Bulbasaur", baseStat: 368 }, // baseStat + 50
      { name: "Squirtle", baseStat: 364 }, // baseStat + 50
      { name: "Charmander", baseStat: 359 }, // baseStat + 50
    ];

    expect(myOrganizedDeck(Pokedex)).toEqual(expected);
  });

  // Check that the baseStats were modified correctly and order of array is correct
  test("examples test", () => {
    expect(myOrganizedDeck(Pokedex)[0].baseStat).toBe(584); // Charizard's baseStat should now be 534 + 50
    expect(myOrganizedDeck(Pokedex)[2].baseStat).toBe(370); // Pikachu's baseStat should now be 320 + 50
    expect(myOrganizedDeck(Pokedex)[5].baseStat).toBe(359); // Charmander's baseStat should now be 309 + 50
  });
});
