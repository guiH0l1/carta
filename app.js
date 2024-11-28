/**
 * Sorteio de uma carta
 * exemplo de uso de um vetor
 * @author Guilherme Holi
 */

function sortear() {
    let nipes = ['♥', '♦', '♣', '♠']
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    //sorteio do indice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let facesSorteado = faces[Math.floor(Math.random() * 13)]

    //console.log(`${facesSorteado} de ${nipeSorteado}`)
    //determinar a cor em base da carta sorteada
    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }

    //renderizar o canto superior esquerda da carta
    // a linha abaixo adiciona a div identificada como 'supEsq' a face de um nipe sorteada a tambem a <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div>${facesSorteado}</div><div>${nipeSorteado}</div>`
    // A linha abaixo muda o css referente a tag identificada
    document.getElementById('supEsq').style.color = cor

      // renderizar o centro da carta
      let cc = document.getElementById('centroCarta')
      if (facesSorteado === 'J') {
          cc.innerHTML = `<img src="/img/valete.png">`
      } else if (facesSorteado === 'Q') {
          cc.innerHTML = `<img src="/img/dama.png">`
      } else if (facesSorteado === 'K') {
          cc.innerHTML = `<img src="/img/rei.png">`
      } else {
          cc.innerHTML = `${nipeSorteado}`
          cc.style.color = cor
      }


    document.getElementById('infDir').innerHTML = `<div>${facesSorteado}</div><div>${nipeSorteado}</div>`
     // A linha abaixo muda o css referente a tag identificada
     document.getElementById('infDir').style.color = cor

}



sortear()