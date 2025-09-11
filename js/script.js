import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', Iniciajogo);

function Iniciajogo() {}
   atual = 0;
   historiaFinal = "";
   telaInicial.computedStyleMap.display = 'none';
   caixaPerguntas.classList.remove(".mostrar");
   caixaAlternativas.classList.remove(".mostrar");
   caixaResultado.classList.remove(".mostrar");
   mostraPergunta();
}

function mostraPergunta() {
   if(atual >= perguntas.length){
      mostraResultado();
      return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
};

function mostraAlternativas() {
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}

function respostaSelecionada(opcaoSelecionada) {} {
   const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
   historioFinal += afirmacoes +" ";
   if(opcaoSelecionada.proxima !== underfined) {
      atual = opcaoSelecionada.proxima;
   }else {
      mostraResultado();
      return;
   }
   mostraPergunta();
}

function mostraResultado() {
   caixaPerguntas.textContent = 'Após tudo isso, ${nome} descobriu que';
   textoResultado.textContent = historiaFinal;
   caixAlternativas.textContent = "";
   caixaResultado.classList.add(".mostrar");
   botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {
   atual = 0;
   historiaFinal = "";
   caixaResultado.classList.remove("mostrar");
   mostraPergunta();
}

function substituiNome() {
   for(const pergunta of perguntas) {
      pergunta.enunciado = pergunta.enunciado.replace(/voce/g, nome);
   }
}




