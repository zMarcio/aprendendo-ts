"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.empresas = void 0;
class empresas {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    addColab(colaboradores) {
        this.colaboradores.push(colaboradores);
    }
    viewColab() {
        for (const colab of this.colaboradores) {
            console.log(colab);
        }
    }
    getNome() {
        return this.nome;
    }
    getColab() {
        return this.colaboradores;
    }
}
exports.empresas = empresas;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa = new empresas('Fábrica LowStyle', '44.333.222/1111-11');
const junin = new Colaborador('junin', 'bala');
const cremoso = new Colaborador('cremoso', 'Chefin');
const caixa = new Colaborador('caixa', 'de Sexo');
const pandora = new Colaborador('Pandora', 'O baffo q mata');
empresa.addColab(junin);
empresa.addColab(cremoso);
empresa.addColab(caixa);
empresa.addColab(pandora);
empresa.viewColab();
console.log(empresa.getColab());
//# sourceMappingURL=index.js.map