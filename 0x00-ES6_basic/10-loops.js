export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const each of array) {
    res.push(appendString + each);
  }

  return res;
}
