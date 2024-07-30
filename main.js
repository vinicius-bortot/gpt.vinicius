const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que os celulares devem ser permitidos nas salas de aula?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Sim"
            },
            {
                texto: "Não",
                afirmacao: "Não"
            }
        ]
    },
    {
        enunciado: "Qual é o impacto mais significativo do uso de celulares durante as aulas?",
        alternativas: [
            {
                texto: "Melhora na comunicação e pesquisa",
                afirmacao: "Melhora na comunicação e pesquisa"
            },
            {
                texto: "Distração e redução da concentração",
                afirmacao: "Distração e redução da concentração"
            }
        ]
    },
    {
        enunciado: "Como os celulares podem ser melhor utilizados para fins educacionais?",
        alternativas: [
            {
                texto: "Integração em atividades de aprendizado",
                afirmacao: "Integração em atividades de aprendizado"
            },
            {
                texto: "Restrição total durante o horário escolar",
                afirmacao: "Restrição total durante o horário escolar"
            }
        ]
    },
    {
        enunciado: "Quem deve ser responsável por regular o uso de celulares na escola?",
        alternativas: [
            {
                texto: "Professores e administradores",
                afirmacao: "Professores e administradores"
            },
            {
                texto: "Pais e responsáveis",
                afirmacao: "Pais e responsáveis"
            }
        ]
    },
    {
        enunciado: "Qual é o principal argumento contra o uso irrestrito de celulares em escolas? Qual é o principal argumento contra o uso irrestrito de celulares em escolas?",
        alternativas: [
            {
                texto: "Potencial de cyberbullying e distração",
                afirmacao: "Potencial de cyberbullying e distração"
            },
            {
                texto: "Ferramenta educacional eficaz",
                afirmacao: "Ferramenta educacional eficaz"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();