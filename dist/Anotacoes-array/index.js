"use strict";
function multiplicarArgs(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
function concatenaString(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
function toUpperCase(...args) {
    return args.map(valor => valor.toUpperCase());
}
console.log(multiplicarArgs(9, 9));
console.log(concatenaString('9', '9', 'a', 'b', 'c'));
console.log(toUpperCase('a', 'b', 'c'));
//# sourceMappingURL=index.js.map