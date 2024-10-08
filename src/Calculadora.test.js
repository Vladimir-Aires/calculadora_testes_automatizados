const Calculadora = require("./Calculadora");


describe("Calculadora", () => {
    test("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
        expect(calculadora.resultado).toBe(0);
    });

    it("Atribuir um novo valor à calculadora", () => {
        const calculadora = new Calculadora();
        expect(() => calculadora.resultado = 'Texto').toThrow(TypeError);
        expect(() => calculadora.resultado = 'Texto').toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(0);
        expect(() => calculadora.resultado = '5').not.toThrow(TypeError);
        expect(calculadora.resultado).toBe(5);
            }
        )

    it('Operação Soma', () => {
        const calculadora = new Calculadora();

        expect(calculadora.soma).toBeDefined();
        

    })


    })