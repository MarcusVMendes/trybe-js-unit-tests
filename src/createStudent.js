/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (nome) => ({
  name: nome,
  feedback: () => 'Eita pessoa boa!',
});
console.log(createStudent('Marcus'));
module.exports = createStudent;
// Dica do Panta de utilizar os parenteses, haja vista que a arrow function sem ele não diferencia se a chave é um escopo ou um objeto.
