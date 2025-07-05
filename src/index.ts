import inquirer from "inquirer";
import { somar, subtrair, multiplicar, dividir } from "./calc";

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
        ],
      },
    ]);

    const { a } = await inquirer.prompt([
      {
        type: "input",
        name: "a",
        message: "Digite o primeiro número:",
        validate: (input) =>
          !isNaN(Number(input)) || "Digite um número válido.",
        filter: (input) => Number(input),
      },
    ]);

    const { b } = await inquirer.prompt([
      {
        type: "input",
        name: "b",
        message: "Digite o segundo número:",
        validate: (input) =>
          !isNaN(Number(input)) || "Digite um número válido.",
        filter: (input) => Number(input),
      },
    ]);

    let resultado: number;

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
    console.log(); // Linha em branco para separar as execuções
  }
  console.log("Calculadora encerrada.");
}

main();
