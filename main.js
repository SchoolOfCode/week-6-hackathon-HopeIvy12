// Pokedex!

// Hello Trainer!

// We need your help, we are just about to go into a Pokémon Battle, please help me organize my deck before the fight.
// Your task is to write a function named myOrganizedDeck.
// That takes in an array of Pokémon objects and applies a booster to each Pokémon's baseStat by adding 50 points.
// After that, the array should be sorted by their new base stats!

// Input:
// The input will be an array of Pokémon objects, where each object contains:
// name: a string representing the name of the Pokémon (i.e. "Pikachu").
// baseStat: an integer representing the Pokémon's base stats (i.e. 320).

// Output:
// The output should be the one array of all of the Pokémon given, but with each Pokémon's baseStat boosted by 50 points.
//The array should then be sorted from new highest base stats to new lowest base stats.

// export function myOrganizedDeck(Pokedex) {
//   //Good luck solider!
// }

export function myOrganizedDeck(Pokedex) {
  // Apply the energy boost first
  const updatedDeck = Pokedex.map((pokemon) => ({
    ...pokemon,
    baseStat: pokemon.baseStat + 50, // Add 50 to each Pokémon's baseStat
  }));
  // Sort by new baseStat
  return updatedDeck.sort((a, b) => b.baseStat - a.baseStat);
}
