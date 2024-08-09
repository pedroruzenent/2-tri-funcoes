const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma nave espacial que acaba de pousar em um planeta desconhecido. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Estou animado para explorar!",
                afirmacao: "Você decide imediatamente sair da nave para começar a explorar o planeta."
            },
            {
                texto: "Estou com medo do desconhecido.",
                afirmacao: "Você opta por ficar dentro da nave e analisar os dados do planeta antes de sair."
            }
        ]
    },
    {
        enunciado: "Durante a exploração, você encontra uma estrutura alienígena. Como você procede?",
        alternativas: [
            {
                texto: "Investiga a estrutura usando o equipamento de pesquisa da nave.",
                afirmacao: "Você coleta amostras e dados valiosos sobre a estrutura alienígena."
            },
            {
                texto: "Decide não se aproximar e manter distância para evitar riscos.",
                afirmacao: "Você opta por analisar a estrutura de longe e enviar os dados para a Terra."
            }
        ]
    },
    {
        enunciado: "Ao retornar à nave, você discute com sua equipe sobre o impacto das descobertas. Qual é sua opinião?",
        alternativas: [
            {
                texto: "A descoberta pode abrir novas oportunidades para a exploração espacial.",
                afirmacao: "Você acredita que as novas informações podem levar a futuras explorações e descobertas."
            },
            {
                texto: "Estou preocupado com os riscos que podem surgir com essas descobertas.",
                afirmacao: "Você sugere precauções adicionais e uma análise mais aprofundada dos riscos."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um relatório detalhado sobre a missão para apresentar na conferência espacial. Como você faz isso?",
        alternativas: [
            {
                texto: "Usa um software de apresentação para criar um relatório visualmente atraente.",
                afirmacao: "Você produz um relatório bem elaborado e apresenta os resultados de forma clara."
            },
            {
                texto: "Escreve o relatório manualmente e detalha todas as observações e descobertas.",
                afirmacao: "Você fornece um relatório completo e detalhado, abordando cada aspecto da missão."
            }
        ]
    },
    {
        enunciado: "Você e sua equipe têm uma nova missão programada para o próximo mês. Como se prepara para isso?",
        alternativas: [
            {
                texto: "Participa de treinamentos e simulações para se preparar para os desafios da nova missão.",
                afirmacao: "Você e sua equipe estão bem preparados e atualizados para enfrentar novos desafios."
            },
            {
                texto: "Revisa os dados da missão anterior e ajusta os equipamentos com base nas lições aprendidas.",
                afirmacao: "Você garante que todos os equipamentos estão em perfeitas condições e aprende com a experiência passada."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "E assim terminou sua missão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
