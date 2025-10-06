const statusFilmes = {};

function simularLocacao(filmeId, tipoAcao) {
  const statusElement = document.getElementById(`status-${filmeId}`);
  let mensagem = "";

  if (statusFilmes[filmeId] === 1) {
    mensagem = `ERRO: O filme já foi vendido.`;
    statusElement.textContent = mensagem;
    statusElement.classList.add('status-vendido');
    return;
  }

  if (tipoAcao === 'Emprestar') {
    mensagem = `SIMULAÇÃO: "${filmeId}" emprestado por R$ 5,00.`;
    statusFilmes[filmeId] = 2;
    statusElement.classList.remove('status-vendido');
  } else if (tipoAcao === 'Vender') {
    mensagem = `SIMULAÇÃO: "${filmeId}" vendido por R$ 30,00.`;
    statusFilmes[filmeId] = 1;
    statusElement.classList.add('status-vendido');
  }

  statusElement.textContent = mensagem;
  alert(mensagem);
}

function abrirTrailer(url) {
  window.open(url, "_blank");
}
