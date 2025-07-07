import inquirer from "inquirer";
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

async function main() {
  let continuar = true;

  while (continuar) {
    const { opcao } = await inquirer.prompt([
      {
        type: "list",
        name: "opcao",
        message: "Escolha a operação:",
        choices: [
          { name: "Somar", value: "1" },
          { name: "Subtrair", value: "2" },
          { name: "Multiplicar", value: "3" },
          { name: "Dividir", value: "4" },
          { name: "Potência", value: "5" },
          { name: "Raiz Quadrada", value: "6" },
          { name: "Módulo", value: "7" },
          { name: "Fatorial", value: "8" },
        ],
      },
    ]);

    let a: number = 0,
      b: number = 0,
      resultado: number;

    if (["1", "2", "3", "4", "5", "7"].includes(opcao)) {
      ({ a } = await inquirer.prompt([
        {
          type: "input",
          name: "a",
          message: "Digite o primeiro número:",
          validate: (input) =>
            !isNaN(Number(input)) || "Digite um número válido.",
          filter: (input) => Number(input),
        },
      ]));
      ({ b } = await inquirer.prompt([
        {
          type: "input",
          name: "b",
          message: "Digite o segundo número:",
          validate: (input) =>
            !isNaN(Number(input)) || "Digite um número válido.",
          filter: (input) => Number(input),
        },
      ]));
    } else if (["6", "8"].includes(opcao)) {
      ({ a } = await inquirer.prompt([
        {
          type: "input",
          name: "a",
          message: "Digite o número:",
          validate: (input) =>
            !isNaN(Number(input)) || "Digite um número válido.",
          filter: (input) => Number(input),
        },
      ]));
    }

    switch (opcao) {
      case "1":
        resultado = somar(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "2":
        resultado = subtrair(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "3":
        resultado = multiplicar(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "4":
        try {
          resultado = dividir(a, b);
          console.log(`Resultado: ${resultado}`);
        } catch (e: any) {
          console.log(`Erro: ${e.message}`);
        }
        break;
      case "5":
        resultado = potencia(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "6":
        try {
          resultado = raiz(a);
          console.log(`Resultado: ${resultado}`);
        } catch (e: any) {
          console.log(`Erro: ${e.message}`);
        }
        break;
      case "7":
        resultado = modulo(a, b);
        console.log(`Resultado: ${resultado}`);
        break;
      case "8":
        try {
          resultado = fatorial(a);
          console.log(`Resultado: ${resultado}`);
        } catch (e: any) {
          console.log(`Erro: ${e.message}`);
        }
        break;
      default:
        console.log("Opção inválida.");
    }

    const { continuarResp } = await inquirer.prompt([
      {
        type: "list",
        name: "continuarResp",
        message: "Deseja fazer outra operação?",
        choices: [
          { name: "Sim", value: true },
          { name: "Não", value: false },
        ],
        default: 0,
      },
    ]);
    continuar = continuarResp;
    console.log();
  }
  console.log("Calculadora encerrada.");
}

main();
