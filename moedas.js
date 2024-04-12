// Função para gerar um número aleatório dentro de um intervalo
function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

class Moedas {
    static MAIS_LEVE = "Mais leve";
    static MAIS_PESADO = "Mais pesada";

    constructor() {
        this.posicaoDaMoedaFalsificada = gerarNumeroAleatorio(1, 12);
        this.moedaFalsa = gerarNumeroAleatorio(0, 1);
        this.localizacaoDaMoeda = 0;
        this.moedas = Array(12).fill(10); // Inicializa o array de moedas com 10 em cada posição
        this.peso = "ainda desconhecido";
    }

    preencherArray(n) {
        this.moedas.fill(n); // Preenche o array de moedas com o valor n
    }

    encontrarFalsa(n) {
        if (this.moedaFalsa === 1) {
            this.moedas[this.posicaoDaMoedaFalsificada] = 1 + n * (this.moedaFalsa);
        } else {
            this.moedas[this.posicaoDaMoedaFalsificada] = n - 1;
        }
    }

    imprimir1() {
        return this.moedas.toString();
    }

    procurar() {
        const w1grupoA = this.moedas.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
        const w1grupoB = this.moedas.slice(4, 8).reduce((acc, curr) => acc + curr, 0);

        const w2grupoA = this.moedas.slice(0, 3).reduce((acc, curr) => acc + curr, 0);
        const w2grupoB = this.moedas.slice(8, 11).reduce((acc, curr) => acc + curr, 0);
        const w2grupoC = this.moedas.slice(0, 3).concat(this.moedas.slice(4, 6)).reduce((acc, curr) => acc + curr, 0);
        const w2grupoD = this.moedas.slice(1, 4).concat(this.moedas.slice(6, 8)).reduce((acc, curr) => acc + curr, 0);
        const w2grupoE = this.moedas.slice(0, 3).concat(this.moedas.slice(4, 6)).reduce((acc, curr) => acc + curr, 0);
        const w2grupoF = this.moedas.slice(2, 5).concat(this.moedas.slice(5, 8)).reduce((acc, curr) => acc + curr, 0);

        if (w1grupoA === w1grupoB) {
            if (w2grupoA === w2grupoB) {
                if (this.moedas[11] > this.moedas[0]) {
                    this.localizacaoDaMoeda = 11;
                    this.peso = Moedas.MAIS_PESADO;
                } else {
                    this.localizacaoDaMoeda = 11;
                    this.peso = Moedas.MAIS_LEVE;
                }
            } else if (w2grupoA < w2grupoB) {
                if (this.moedas[8] === this.moedas[9]) {
                    this.localizacaoDaMoeda = 10;
                    this.peso = Moedas.MAIS_PESADO;
                } else if (this.moedas[8] > this.moedas[9]) {
                    this.localizacaoDaMoeda = 8;
                    this.peso = Moedas.MAIS_PESADO;
                } else {
                    this.localizacaoDaMoeda = 9;
                    this.peso = Moedas.MAIS_PESADO;
                }
            } else {
                if (this.moedas[8] === this.moedas[9]) {
                    this.localizacaoDaMoeda = 10;
                    this.peso = Moedas.MAIS_LEVE;
                } else if (this.moedas[8] < this.moedas[9]) {
                    this.localizacaoDaMoeda = 8;
                    this.peso = Moedas.MAIS_LEVE;
                } else {
                    this.localizacaoDaMoeda = 9;
                    this.peso = Moedas.MAIS_LEVE;
                }
            }
        } else if (w1grupoA < w1grupoB) {
            if (w2grupoC === w2grupoD) {
                if (this.moedas[8] === this.moedas[2]) {
                    this.localizacaoDaMoeda = 3;
                    this.peso = Moedas.MAIS_LEVE;
                } else {
                    this.localizacaoDaMoeda = 2;
                    this.peso = Moedas.MAIS_LEVE;
                }
            } else if (w2grupoC < w2grupoD) {
                if (this.moedas[6] === this.moedas[7]) {
                    this.localizacaoDaMoeda = 0;
                    this.peso = Moedas.MAIS_LEVE;
                } else if (this.moedas[6] > this.moedas[7]) {
                    this.localizacaoDaMoeda = 6;
                    this.peso = Moedas.MAIS_PESADO;
                } else {
                    this.localizacaoDaMoeda = 7;
                    this.peso = Moedas.MAIS_PESADO;
                }
            } else {
                if (this.moedas[4] === this.moedas[5]) {
                    this.localizacaoDaMoeda = 1;
                    this.peso = Moedas.MAIS_LEVE;
                } else if (this.moedas[4] > this.moedas[5]) {
                    this.localizacaoDaMoeda = 4;
                    this.peso = Moedas.MAIS_PESADO;
                } else {
                    this.localizacaoDaMoeda = 5;
                    this.peso = Moedas.MAIS_PESADO;
                }
            }
        } else {
            if (w2grupoE === w2grupoF) {
                if (this.moedas[8] === this.moedas[6]) {
                    this.localizacaoDaMoeda = 7;
                    this.peso = Moedas.MAIS_LEVE;
                } else {
                    this.localizacaoDaMoeda = 6;
                    this.peso = Moedas.MAIS_LEVE;
                }
            } else if (w2grupoE < w2grupoF) {
                if (this.moedas[2] === this.moedas[3]) {
                    this.localizacaoDaMoeda = 4;
                    this.peso = Moedas.MAIS_LEVE;
                } else if (this.moedas[2] > this.moedas[3]) {
                    this.localizacaoDaMoeda = 2;
                    this.peso = Moedas.MAIS_PESADO;
                } else {
                    this.localizacaoDaMoeda = 3;
                    this.peso = Moedas.MAIS_PESADO;
                }
            } else {
                if (this.moedas[0] === this.moedas[1]) {
                    this.localizacaoDaMoeda = 5;
                    this.peso = Moedas.MAIS_LEVE;
                } else if (this.moedas[0] > this.moedas[1]) {
                    this.localizacaoDaMoeda = 0;
                    this.peso = Moedas.MAIS_PESADO;
                } else {
                    this.localizacaoDaMoeda = 1;
                    this.peso = Moedas.MAIS_PESADO;
                }
            }
        }
    }

    imprimir2() {
        let resultado = "";
        if (this.moedaFalsa === 0 && this.peso.toUpperCase() === Moedas.MAIS_LEVE && this.posicaoDaMoedaFalsificada === this.localizacaoDaMoeda) {
            resultado = `A moeda falsa está na ${this.localizacaoDaMoeda + 1}ª posição e é ${this.peso}`;
        } else if (this.moedaFalsa === 1 && this.peso.toUpperCase() === Moedas.MAIS_PESADO && this.posicaoDaMoedaFalsificada === this.localizacaoDaMoeda) {
            resultado = `A moeda falsa está na ${this.localizacaoDaMoeda + 1}ª posição e é ${this.peso}`;
        } else {
            resultado = `A moeda localiza-se na ${this.localizacaoDaMoeda}ª posição e o peso é ${this.peso}`;
        }
        return resultado;
    }

    imprimirMoedas() {
        let moedasHtml = "<p>Configuração das Moedas:</p><ul>";
        for (let i = 0; i < this.moedas.length; i++) {
            moedasHtml += `<li>Moeda ${i + 0}: ${this.moedas[i]} g</li>`;
        }
        moedasHtml += "</ul>";
        return moedasHtml;
    }
}

function executarAlgoritmo() {
    const moedas = new Moedas();
    moedas.preencherArray(10);
    moedas.encontrarFalsa(10);
    moedas.procurar();
    document.getElementById('moedas').innerHTML = moedas.imprimirMoedas();
    document.getElementById('output').innerText = moedas.imprimir2();
}
