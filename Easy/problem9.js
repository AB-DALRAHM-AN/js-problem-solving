// my solution
function typeValidation(variable, type) {
  return typeof variable === type;
}
console.log(typeValidation(42, "number"));
console.log(typeValidation("42", "string"));
console.log(typeValidation(true, "boolean"));
console.log(typeValidation({}, "object"));
console.log(typeValidation([], "array"));