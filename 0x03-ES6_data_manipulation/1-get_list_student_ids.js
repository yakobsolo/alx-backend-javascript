export default function getListStudentIds(arrayobj) {
  if (!Array.isArray(arrayobj)) return [];
  return array.map((i) => i.id);
}
