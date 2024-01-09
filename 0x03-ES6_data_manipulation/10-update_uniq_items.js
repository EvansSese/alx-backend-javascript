export default function updateUniqueItems(groceryMap) {
  // Check if the argument is a map
  if (!(groceryMap instanceof Map)) {
      throw new Error('Cannot process');
  }

  // Iterate over the map entries and update quantities
  for (const [item, quantity] of groceryMap) {
      if (quantity === 1) {
          groceryMap.set(item, 100);
      }
  }

  return groceryMap;
}
