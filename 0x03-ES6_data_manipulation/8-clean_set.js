export default function cleanSet(set, startString) {
  // Filter the set values that start with the specified string
  const filteredValues = Array.from(set).filter(value => value.startsWith(startString));

  // Join the filtered values into a string separated by '-'
  return filteredValues.join('-');
}
