export default getStudentIdsSum(arr) => {
  const initialvalue = 0;
  return arr.reduce((accumulator, currentvalue) => accumulator + currentvalue.id, initialvalue);
}
