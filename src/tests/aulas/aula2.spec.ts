/* eslint-disable @typescript-eslint/ban-ts-comment */
import isTestAvailable from "../helpers/isTestAvailable";

import ex1 from "../../aulas/aula2/ex1";
import ex2 from "../../aulas/aula2/ex2";

const itIf = (condition) => (condition ? it : it.skip);

const exIf1 = isTestAvailable(ex1);
const exIf2 = isTestAvailable(ex2);

describe("Aula 2 - Trabalhando com funções e condicionais", () => {
  itIf(exIf1)("Ex1 - Função verificando se array tem palavra 'teste'", () => {
    // @ts-ignore
    const sut: (testIn: string[]) => boolean = ex1;
    const data = [
      ["none"],
      ["none", "test", "Teste"],
      ["TESTE", "TESTe", "teste"],
      [
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
      ],
      ["a", "b", "c", "teste"],
    ];

    expect(sut(data[0])).toBe(false);
    expect(sut(data[1])).toBe(false);
    expect(sut(data[2])).toBe(true);
    expect(sut(data[3])).toBe(false);
    expect(sut(data[4])).toBe(true);
  });
  itIf(exIf2)("Ex2 - Função Bola mágica", () => {
    type TestIn = {
      name?: string;
      question: string;
    };
    type TestOut = {
      greeting: string;
      name?: string;
      question: string;
      randomNumber: number;
      answer: string;
    };
    const answers = [
      "Com certeza.",
      "Está decidido então.",
      "Sem dúvida.",
      "Sim, definitivamente.",
      "Você pode confiar nisso.",
      "Da forma que vejo, sim.",
      "Muito provavelmente.",
      "Me parece bom.",
      "Sim.",
      "Parece apontar para sim.",
      "Resposta nebulosa, tente novamente.",
      "Pergunte novamente depois.",
      "Melhor não te dizer agora.",
      "Não posso prever agora.",
      "Se concentre e pergunte novamente.",
      "Não conte com isso.",
      "Minha resposta é não.",
      "Minhas fontes dizem não.",
      "Me parece que não é uma boa.",
      "Muito duvidoso.",
    ];

    const questions = [
      "Hoje é dia de festa?",
      "Vou receber um aumento?",
      "Já é hora de comer?",
      "Está na hora de viajar?",
      "Devo ir no dentista anualmente?",
    ];

    // @ts-ignore
    const sut: (testIn: TestIn) => TestOut = ex2;
    const randomNumber = Math.floor(Math.random() * 5);
    const sutAnswer = [
      sut({ question: questions[0] }),
      sut({ question: questions[1] }),
      sut({ name: "Fulano", question: questions[2] }),
      sut({ name: "Ciclano", question: questions[3] }),
      sut({ name: "", question: questions[4] }),
    ];

    expect(sutAnswer[randomNumber].greeting).toBe(
      `Olá${
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        sutAnswer[randomNumber].name ? `, ${sutAnswer[randomNumber].name}` : ""
      }!`,
    );
    expect(sutAnswer[randomNumber].question).toBe(questions[randomNumber]);
    expect(sutAnswer[randomNumber].randomNumber).toBeDefined();
    expect(sutAnswer[randomNumber].answer).toBe(
      answers[sutAnswer[randomNumber].randomNumber],
    );
  });
});
