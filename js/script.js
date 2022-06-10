const elementoResposta = document.querySelector('#resposta');
const buttonPerguntar = document.querySelector('#buttonPerguntar');
const respostas = [
  "pizza",
  "crepioca",
  "pão com ovo frito"
]

// clicar em fazer pergunta
function fazerPergunta() {

  // desabilita o botão
  buttonPerguntar.setAttribute('disabled', true);


  // gerar um número aleatório
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  // exibir a resposta
  elementoResposta.innerHTML = respostas[numeroAleatorio];
  
  elementoResposta.style.opacity = 1;

  // sumir a resposta apos 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled');
  }, 7000);
}