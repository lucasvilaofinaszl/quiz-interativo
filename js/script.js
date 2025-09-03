import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', Iniciajogo);

function Iniciajogo() {}
   atual = 0;
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

function mostraAlternativas() {}

function mostraResultado() {
   caixaPerguntas.textContent = 'Após tudo isso, ${nome} descobriu que';
   textoResultado.textContent = historiaFinal;
   caixAlternativas.textContent = "";
   caixaResultado.classList.add(".mostrar");
   botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {}




