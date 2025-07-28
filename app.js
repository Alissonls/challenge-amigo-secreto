// Onde ficam os nomes dos sortudos (ou azarados) do amigo secreto
const galeraDoBarulho = [];

// Campo onde o nome do amigo é digitado
const caixinhaMagicaDeNomes = document.getElementById('amigo');

// Lista onde os nomes aparecem na tela
const muralDeAmizade = document.getElementById('listaAmigos');

// Área onde aparece o nome do amigo sorteado
const palcoDoVencedor = document.getElementById('resultado');

// Ação do botão adicionar Amigo
function adicionarAmigo() {
  const nomeDigitadoComCarinho = caixinhaMagicaDeNomes.value.trim();

  if (nomeDigitadoComCarinho === '') {
    alert('Ei! Digita um nome aí, pô!');
    return;
  }

  if (galeraDoBarulho.includes(nomeDigitadoComCarinho)) {
    alert('Esse nome já está na roda, tente outro!');
    return;
  }

  galeraDoBarulho.push(nomeDigitadoComCarinho);
  caixinhaMagicaDeNomes.value = '';
  atualizarMural();
  caixinhaMagicaDeNomes.focus(); // Foco automático
}

// Atualiza a exibição da lista de amigos
function atualizarMural() {
  muralDeAmizade.innerHTML = '';

  galeraDoBarulho.forEach((amiguinho) => {
    const itemFofo = document.createElement('li');
    itemFofo.textContent = amiguinho;
    muralDeAmizade.appendChild(itemFofo);
  });
}

// Faz o grande sorteio do amigo secreto
function sortearAmigo() {
  palcoDoVencedor.innerHTML = '';

  if (galeraDoBarulho.length === 0) {
    alert('Oxe! Adiciona alguém antes de sortear, né?!');
    return;
  }

  const dedoDoDestino = Math.floor(Math.random() * galeraDoBarulho.length);
  const escolhidoPeloUniverso = galeraDoBarulho[dedoDoDestino];

  const resultadoDivertido = document.createElement('li');
  resultadoDivertido.textContent = `🎉 E o grande amigo secreto é... ${escolhidoPeloUniverso}!`;
  palcoDoVencedor.appendChild(resultadoDivertido);

  caixinhaMagicaDeNomes.focus(); // Foco de novo no input
}

// Permite adicionar com a tecla Enter
caixinhaMagicaDeNomes.addEventListener('keydown', function(eventoDivertido) {
  if (eventoDivertido.key === 'Enter') {
    adicionarAmigo();
  }
});

// Função extra: limpar tudo e recomeçar
function resetarBaguncinha() {
  galeraDoBarulho.length = 0;
  muralDeAmizade.innerHTML = '';
  palcoDoVencedor.innerHTML = '';
  caixinhaMagicaDeNomes.value = '';
  caixinhaMagicaDeNomes.focus();
  alert('Tudo limpo! Pode começar do zero 🚿');
}
