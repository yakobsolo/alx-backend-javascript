export default function guardrail(mathFunction) {
const arr = [];
const val = await mathFunction();
arr.push(val);
arr.push("Guardrail was processed");
}
