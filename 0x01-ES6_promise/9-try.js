export default function guardrail(mathFunction) {
const queue = [];
const val;
try {
  val = mathFunction();
} catch(err) {
  val = err.toString();
}
arr.push(val);
arr.push("Guardrail was processed");
return queue;
}
