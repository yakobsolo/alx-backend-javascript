export default function createEmployeesObject(departmentName, employees) {
  const obj1 = {
    [departmentName]: employees,
  };
  return obj1;
}
