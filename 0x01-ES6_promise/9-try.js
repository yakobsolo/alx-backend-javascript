export default function guardrail(mathFunction) {
const queue = [];
let val;
try {
  val = mathFunction();
} catch (error) {
  val = error.toString();
}
queue.push(val);
queue.push("Guardrail was processed");
return queue;
}
