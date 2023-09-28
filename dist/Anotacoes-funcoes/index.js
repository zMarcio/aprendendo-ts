"use strict";
function mapString(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}
const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, item => item.toLocaleUpperCase());
console.log(abcMapped);
//# sourceMappingURL=index.js.map