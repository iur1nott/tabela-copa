console.log('tabela da copa')

let tabelaJogos = document.querySelector('.tabelaJogos')
console.log(tabelaJogos)

 fetch('jogos-fase1.json')
 .then( response => response.json() )
 .then( data => data.forEach(jogo =>  {
    
  

    let linha = document.createElement('tr')
    tabelaJogos.appendChild(linha)

    linha.innerHTML = `
    <td>${jogo.diaSemana}</td>
    <td>${jogo.data}</td>
    <td>${jogo.hora}</td>
    <td>${jogo.grupo}</td>
    <td class = 'centralizar'>
      <img class = 'imagemP'src='./images/bandeiras/${jogo.mandante}' alt = ''/
      >

      <span class = 'gols'>${jogo.gols_mandante}</span> 

      <span class = 'partida'>${jogo.partida}</span> 
   
      <span class = 'gols'>${jogo.gols_visitante}</span> 

      <img class = 'imagemP'src='./images/bandeiras/${jogo.visitante}' alt = ''/
      >
    </td>
    <td class= 'esquerda'>${jogo.estadio}</td>
    `


 })
 )
let tabelaClassificacao = document.querySelector('.tabelaJogos')


 // ler json das classificacoes
 fetch('classificacaoGrupoG.json')
 .then(resposta => resposta.json())
 .then(dados => forEach( selecao => {

   let linha = document.createElement('tr')

   tabelaClassificacao.appendChild(linha)

   linha.innerHTML = `
   <td>${selecao.posicao}</td>
   <td>${selecao.selecao}</td>
   <td>${selecao.pontos}</td>
   <td>${selecao.jogos}</td>
   <td>${selecao.vitoria}</td>
   <td>${selecao.empate}</td>
   <td>${selecao.derrota}</td>
   <td>${selecao.gols_pro}</td>
   <td>${selecao.gols_contra}</td>
   <td>${selecao.saldo_de_gols}</td>
   `
 })
 )




