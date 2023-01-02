export default getStudentsByLocation(student, locations) {
  return student.filter(row => row.location === locations);
}
