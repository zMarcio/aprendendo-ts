"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escolhaCor = void 0;
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 10] = "VERMELHO";
    Cores[Cores["AZUL"] = 1] = "AZUL";
    Cores[Cores["AMARELO"] = 32] = "AMARELO";
})(Cores || (Cores = {}));
console.log(Cores.VERMELHO);
console.log(Cores[1]);
function escolhaCor(cor) {
    console.log(Cores[cor]);
}
exports.escolhaCor = escolhaCor;
escolhaCor(32);
exports.default = 1;
//# sourceMappingURL=index.js.map