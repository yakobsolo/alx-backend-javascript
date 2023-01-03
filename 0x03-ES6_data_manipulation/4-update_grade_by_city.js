export default function getStudentsByLocation(arr, city, gradee) {
  return arr
    .filter((i) => i.location === city)
    .map((student) => {
      const grad = gradee
        .filter((i) => i.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = grad || 'N/A';
      return { ...student, grade };
    });
}
