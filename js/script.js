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

botaoIniciar.addEventListener('click', Iniciajogo);

function Iniciajogo() {}
   atual = 0;
   telaInicial.computedStyleMap.display = 'none';
   caixaPerguntas.classList.remove(".mostrar");
   caixaAlternativas.classList.remove(".mostrar");
   caixaResultado.classList.remove(".mostrar");
   mostraPergunta();
}

function mostraPergunta() {}

