// Função tradicional sem parâmetros
function saudacao() {
    console.log("Demonstração de Funções");
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function soma(a, b) {
    return a + b;
  }
  
  // Arrow function com parâmetros e retorno de valor
  const multiplicacao = (a, b) => a * b;
  
  saudacao();
  
  const n1 = 10;
  const n2 = 5;
  
  const resultadoSoma = soma(n1, n2);
  console.log(`A soma de ${n1} e ${n2} é: ${resultadoSoma}`);
  
  const resultadoMultiplicacao = multiplicacao(n1, n2);
  console.log(`A multiplicação de ${n1} e ${n2} é: ${resultadoMultiplicacao}`);
  