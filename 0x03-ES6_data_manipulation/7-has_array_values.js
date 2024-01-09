export default function hasValuesFromArray(set, arr) {
  // Check if every element in the array is present in the set
  return arr.every(element => set.has(element));
}
