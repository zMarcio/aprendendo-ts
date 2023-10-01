"use strict";
//falou sobre arrow function com this. Arrow function usa this do escopo global
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcao = void 0;
function funcao(nome, agr) {
    console.log(this);
    console.log(nome, agr);
}
exports.funcao = funcao;
//  // assim não da para fazer pois precisa referencia o this
// funcao("oi",32)
// // desses dois jeitos da para fazer, pois da certo referencia o THIS
funcao.call(new Date(), 'duardo', 30);
funcao.apply(new Date(), ['duardo', 30]);
//# sourceMappingURL=index.js.map