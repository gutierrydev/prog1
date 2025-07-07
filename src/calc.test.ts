import {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  raiz,
  modulo,
  fatorial,
} from "./calc";

describe("Funções da calculadora científica", () => {
  test("somar", () => {
    expect(somar(2, 3)).toBe(5);
  });

  test("subtrair", () => {
    expect(subtrair(5, 3)).toBe(2);
  });

  test("multiplicar", () => {
    expect(multiplicar(2, 3)).toBe(6);
  });

  test("dividir", () => {
    expect(dividir(6, 2)).toBe(3);
    expect(() => dividir(1, 0)).toThrow();
  });

  test("potencia", () => {
    expect(potencia(2, 3)).toBe(8);
  });

  test("raiz", () => {
    expect(raiz(9)).toBe(3);
    expect(() => raiz(-1)).toThrow();
  });

  test("modulo", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("fatorial", () => {
    expect(fatorial(5)).toBe(120);
    expect(fatorial(0)).toBe(1);
    expect(() => fatorial(-1)).toThrow();
  });
});
