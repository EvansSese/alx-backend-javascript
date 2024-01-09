export default function cleanSet(set, startString) {
  // Filter the set values that start with the specified string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  const cleanedValues = filteredValues.map(value => value.slice(startString.length));

  // Join the cleaned values into a string separated by '-'
  return cleanedValues.join('-');
}
