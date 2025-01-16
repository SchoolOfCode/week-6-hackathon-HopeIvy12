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

describe("Pokedex test with examples", () => {
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

//throws more passing tests
//   // Additional edge case tests could be added
//   test("Handles empty Pokedex", () => {
//     expect(myOrganizedDeck([])).toEqual([]);
//   });

// name: "Bulbasaur", baseStat: 318 } within the test,
// as long as the structure of the object matches the one your function expects (i.e., an object with a name and baseStat property).
//   test("Handles single Pokémon", () => {
//     const singlePokemon = [{ name: "Bulbasaur", baseStat: 318 }];
//     const expected = [{ name: "Bulbasaur", baseStat: 368 }];
//     expect(myOrganizedDeck(singlePokemon)).toEqual(expected);
//   });

//throws errors
// Checks for a string input
//   test("(string)", () => {
//     expect(() => myOrganizedDeck("Not an array")).toThrow("Input should be an array.");
//   });

//edge cases

// //Test: Array Empty
// test("Pokedex Empty Array", () => {
//   expect(() => myOrganizedDeck([])).toThrow("Array shouldn't be empty");
// });

// //Test: Array Empty
// test("Returns empty array for empty input", () => {
//   expect(myOrganizedDeck([])).toEqual([]);
// });

// // Test: Non-array input (String)
// // test("Non-array Input (String)", () => {
// //   expect(() => myOrganizedDeck(" ")).toThrow("Input should be an array.");
// // });

// // Test: Only one Pokémon given
// //Key Mechanic: The function checks Pokedex.length === 1 and throws the error "Only one Pokémon given".
// //Input Dependency: The specific Pokémon in the array (e.g., { name: "Bulbasaur", baseStat: 318 })
// //doesn't matter, as the logic applies to any array of length 1.

// // Test: Single Pokémon array
// test("Returns single Pokémon array unchanged", () => {
//   const singlePokedex = [{ name: "Charmander", baseStat: 309 }];
//   expect(myOrganizedDeck(singlePokedex)).toEqual(singlePokedex);
// });

// // Test: Ensure function does not accept new array
// test("Function does not accept new array only old array", () => {
//   const newPokedex = [
//     { name: "Eevee", baseStat: 325 },
//     { name: "Jolteon", baseStat: 525 },
//   ];
//   expect(() => myOrganizedDeck(newPokedex)).toThrow("We want the old array adjusted not a new one");
// });

// // test("Only one pokemon given", () => {
// //   const singlePokedex = [{ name: "Bulbasaur", baseStat: 318 }];
// //   expect(() => myOrganizedDeck(singlePokedex)).toThrow("Only one Pokémon given");
// // });
