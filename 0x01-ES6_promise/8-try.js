export default function divideFunction(numerator, denominator) {
  try {
    if(denominator === 0) {
      throw "cannot divide by 0";
    } else {
      return numerator / denominator;
    }
  } catch(thr) {
      return new Error(thr);
    }
}
