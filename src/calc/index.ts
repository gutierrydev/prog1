// cries as funções basicas de uma calculadora
// sumar, dividir, multiplicar, subtrair

export function somar(a: number, b: number): number {
  return a + b;
}

export function subtrair(a: number, b: number): number {
  return a - b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

export function potencia(a: number, b: number): number {
  return Math.pow(a, b);
}

export function raiz(a: number): number {
  if (a < 0)
    throw new Error("Não existe raiz quadrada real de número negativo.");
  return Math.sqrt(a);
}

export function modulo(a: number, b: number): number {
  return a % b;
}

export function fatorial(a: number): number {
  if (a < 0) throw new Error("Fatorial não definido para negativos.");
  if (a === 0) return 1;
  let res = 1;
  for (let i = 1; i <= a; i++) res *= i;
  return res;
}
