/**
 * Gerado com auxílio do GitHub Copilot
 *
 * Prompt utilizado:
 * "Crie uma função em JavaScript que calcule o valor final de um pedido.
 * Caso o valor seja superior a R$100, aplique automaticamente um desconto de 10%.
 * Caso contrário, retorne o valor original."
 */

function calcularPedido(valor) {
    if (valor > 100) {
        return valor * 0.9;
    }

    return valor;
}

module.exports = calcularPedido;