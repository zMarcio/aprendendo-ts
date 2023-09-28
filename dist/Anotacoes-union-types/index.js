"use strict";
function addOrContat(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return `${a}${b}`;
}
console.log(addOrContat(10, 20));
console.log(addOrContat(10, '20'));
console.log(addOrContat('10', 20));
console.log(addOrContat('10', '20'));
//# sourceMappingURL=index.js.map