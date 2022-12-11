console.log('tabela da copa')

let tabelaJogos = document.querySelector('.tabelaJogos')
//console.log(tabelaJogos)

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
      <img class = 'imagemP'src='./images/bandeiras/${jogo.mandante}' alt = ''/>
      <input  type = 'number' min = '0' max = '15' class = 'gols'>
         ${jogo.gols_mandante}
      </input> 
      <span class = 'partida'>${jogo.partida}</span> 
   
      <input type = 'number' min = '0' max = '15' class = 'gols'>
         ${jogo.gols_visitante}
      </input> 
      <img class = 'imagemP'src='./images/bandeiras/${jogo.visitante}' alt = ''/>
    </td>
    <td class= 'esquerda'>${jogo.estadio}</td>
    `


 })
 )
let tabelaClassificacao = document.querySelector('.tabelaClassificacao')
//console.log(tabelaClassificacao)

let linhas = document.querySelectorAll('.corpoClassificacao tr')

exibirTabelaClassificacao('A')

 function exibirTabelaClassificacao(letraGrupo) {
   // atualizar letra do grupo no index.html
   document.querySelector('.letra').innerHTML = letraGrupo


   // ler json das classificacoes
   fetch(`classificacaoGrupo${letraGrupo}.json`)
  .then( response =>  response.json())
  .then(data => {
     //ordenacao dos dados do array   
  
     
     
     
     data.forEach((selecao,indice) => {
     //console.log(data)
     //console.log(selecao)
  
  
  //criar linha tr
     //let linha = document.createElement('tr')


  //colocar ela como filha dentro da tabela
    // tabelaClassificacao.appendChild(linha)


  //preencher od dados
     linhas[indice].innerHTML = `
     <td>${selecao.posicao}</td>
     <td>${selecao.selecao}</td>
     <td>${selecao.pontos}</td>
     <td>${selecao.jogos}</td>
     <td>${selecao.vitorias}</td>
     <td>${selecao.empates}</td>
     <td>${selecao.derrotas}</td>
     <td>${selecao.gols_pro}</td>
     <td>${selecao.gols_contra}</td>
     <td>${selecao.saldo_de_gols}</td>
     `
  
  })
  }
  )
  }
  //exibirTabelaClassificacao('B')

  //controlar a escolha da letra do grupo para exibir na tabela de classificacao
let selectLetra = document.querySelector('.letrasDosGrupos')
//console.log(selectLetra)

// usar um escutador de eventos para a caixa select
selectLetra.addEventListener('change', (event) => {  
   //console.log('mudou')
   //console.log(event.target.value)
   exibirTabelaClassificacao(event.target.value)

})

//oitavas de final
let divOitavas = document.querySelector('.divOitavas')

fetch('oitavas-de-final.json')
.then(response => response.json())
.then(data => {
      //console.log(data)

      data.forEach(jogo => {
      // criar uma nova divisoria
         let divisoria = document.createElement('div')

         //colocar ela como filho da divOitavas
         divOitavas.appendChild(divisoria)

         //preencher os dados de cada jogo
         divisoria.innerHTML = `
         <h3 class = 'jogo'>Oitavas ${jogo.id}</h3>
         <h4>
         <span class = 'dia'>${jogo.diaSemana}</span>
         ${jogo.data}
         <span class = 'hora'>${jogo.hora}</span>
         </h4>
         <h4 class = 'centralizar jogo'>
         <img class  = 'imagemP 'src = './images/bandeiras/${jogo.img_mandante}' />
         <input  type = 'number' min = '0' max = '15' class = 'gols'>
         ${jogo.gols_mandante}
      </input> 
         ${jogo.partida}
         <input  type = 'number' min = '0' max = '15' class = 'gols'>
         ${jogo.gols_visitante}
      </input> 
         <img class  = 'imagemP' src = './images/bandeiras/${jogo.img_visitante}' />
         </h4>
         <h5>${jogo.estadio}</h5>


         `

   })
})
