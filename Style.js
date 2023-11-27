/* Ação de eventos sobre o botão menu da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
openMenu.addEventListener('click', () => {

	/* Sobrepõe a propriedade display: none aplicada no
	   CSS por display: flex que o torna visível. */ 
	menu.style.display = "flex"

	/* Captura o tamanho do menu nav e aplica na posição. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* Após 10 milésimos de segundo, adiciona o atributo style, */
	/* e adiciona as propriedades CSS.*/
	setTimeout(()=> {
		/* Faz o menu nav aparecer na velocidade em que foi
		   determinado na propriedade transition no CSS.*/
		menu.style.opacity = '1'

		/* Move o menu nav para a posição 0 a direita. Utiliza 
		   também a velocidade definida, na propriedade transition 
		   no CSS para realizar o movimento mais suave.*/
		menu.style.right = "0"

		/* Oculta o botão que torna visível o elemento nav.*/
		openMenu.style.display = 'none'
	}, 10);
})

/* Ação de eventos sobre o botão X da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
closeMenu.addEventListener('click', () => {

	/* Faz o menu nav desaparecer na velocidade em que foi
	   determinado na propriedade transition no CSS. */
	menu.style.opacity = '0'

	/* Captura o tamanho do menu nav e aplica na posição. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* Torna visível o botão que apresenta o menu nav. */
	/* openMenu.style.display = 'block'*/
	
	/* Após 200 milésimos de 1 segundo, remove o atributo style. */
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})

let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "A chuva é um dos vários tipos de precipitação do vapor d'água existente na atmosfera, sendo caracterizada pela queda da água em sua forma líquida. Os principais tipos de chuva, de acordo com sua forma de ocorrência, são:",
    alternativaA : "Chuvas de convecção ou convectivas, Chuvas de granizo e Chuvas frontais.",
    alternativaB : "Chuvas de convecção ou convectivas e Chuvas orográficas.",
    alternativaC : "Chuvas de convecção ou convectivas, Chuvas de granizo e Chuvas orográficas.",
    alternativaD : "Chuvas de convecção ou convectivas, Chuvas frontais e Chuvas orográficas.",
    correta      : "Chuvas de convecção ou convectivas, Chuvas frontais e Chuvas orográficas.",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Como a previsão do tempo para 15/09/09 indica a chegada de instabilidades do norte da Argentina ao Brasil, causando chuvas no RS, SC, PR e MS devido à massa de ar quente, qual opção está correta?",
    alternativaA : "A Frente Polar Atlântica, principal área de instabilidade da América do Sul meridional, é responsável pelas chuvas previstas no texto.",
    alternativaB : "As áreas de instabilidade são geradas por nuvens de desenvolvimento vertical, por isso a previsão de pancadas de chuva.",
    alternativaC : "O deslocamento da massa de ar tropical em direção a leste é que gera as áreas de instabilidade mencionadas no texto.",
    alternativaD : "A massa de ar quente e úmida que se encontra sobre o estado do Mato Grosso do Sul corresponde à massa tropical continental, geradora de chuvas em pancadas.",
    correta      : "A Frente Polar Atlântica, principal área de instabilidade da América do Sul meridional, é responsável pelas chuvas previstas no texto.",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "(Mack-2002) Há também as chuvas ________, que ocorrem nas zonas ________, localizadas em torno da latitude de 40°. São causadas pelo choque dos ventos quentes subtropicais com os ventos frios polares. Igor Moreira
Assinale a alternativa que completa correta e respectivamente as lacunas.",
    alternativaA : "convectivas — equatoriais",
    alternativaB : "frontais — subtropicais",
    alternativaC : "convectivas — temperadas",
    alternativaD : "frontais — temperadas",
    correta      : "frontais — temperadas",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é o tipo de chuva que ocorre quando o ar úmido é forçado a subir ao encontrar uma barreira, como uma montanha, e se resfria, formando nuvens e chuvas?",
    alternativaA : "Chuva frontal.",
    alternativaB : "Chuva convectiva.",
    alternativaC : "Chuva orográfica.",
    alternativaD : "Chuva de convecção.",
    correta      : "Chuva orográfica.",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "O que é o efeito de neutralização da chuva ácida?",
    alternativaA : "É o processo em que a chuva ácida se mistura com substâncias alcalinas, como o bicarbonato de sódio, neutralizando sua acidez.",
    alternativaB : "É o processo em que a chuva ácida reage com metais presentes no solo, neutralizando sua acidez.",
    alternativaC : "É o processo em que a chuva ácida se mistura com substâncias básicas, como o hidróxido de cálcio, neutralizando sua acidez.",
    alternativaD : "Nenhuma das alternativas anteriores está correta.",
    correta      : "É o processo em que a chuva ácida se mistura com substâncias básicas, como o hidróxido de cálcio, neutralizando sua acidez.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Como a chuva ácida afeta a agricultura?",
    alternativaA : "Pode prejudicar o crescimento das plantas, causando danos nas folhas e diminuindo a absorção de nutrientes.",
    alternativaB : "Pode acidificar o solo, afetando a disponibilidade de nutrientes para as plantas.",
    alternativaC : "Pode contaminar os alimentos, tornando-os impróprios para consumo humano.",
    alternativaD : "Todas as alternativas anteriores estão corretas.",
    correta      : "Todas as alternativas anteriores estão corretas.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "(Vunesp-1997) No Brasil, o Planalto Atlântico obriga a elevação dos ventos vindos do oceano carregados de umidade. Ao encontrar camadas mais frias de ar, o vapor da atmosfera se condensa e se precipita em forma de chuva. Estas características individualizam as chuvas:",
    alternativaA : "frontais.",
    alternativaB : "polares.",
    alternativaC : "mediterrâneas.",
    alternativaD : "orográficas.",
    correta      : "orográficas.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "“Este tipo de chuva demonstra claramente como as formas de relevo podem influenciar o clima e também os fenômenos meteorológicos, o que faz com que também sejam chamadas de chuvas de relevo. Elas ocorrem quando uma massa de ar úmido é “bloqueada” por uma forma íngreme de relevo, como uma montanha, uma serra ou escarpa.”
A que tipo de chuva refere-se o fragmento acima?",
    alternativaA : "Chuvas de convecção.",
    alternativaB : "Chuvas de verão",
    alternativaC : "Chuvas frontais.",
    alternativaD : "Chuvas ciclônicas",
    correta      : "Chuvas frontais.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "ALTERAR:",
    alternativaA : "movimento sazonal periódico.",
    alternativaB : "migrações internas forçadas.",
    alternativaC : "migrações pendulares.",
    alternativaD : "migrações espontâneas.",
    correta      : "movimento sazonal periódico.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "ALTERAR",
    alternativaA : "25hab/Km2",
    alternativaB : "150 hab/Km2",
    alternativaC : "250hab/Km2",
    alternativaD : "2.500 hab/Km2",
    correta      : "250hab/Km2",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
