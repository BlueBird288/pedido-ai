const calcularPedido = require("../src/pedido");

describe("Função calcularPedido", () => {

    test("Aplica desconto de 10%", () => {
        expect(calcularPedido(200)).toBe(180);
    });

    test("Não aplica desconto", () => {
        expect(calcularPedido(80)).toBe(80);
    });

});