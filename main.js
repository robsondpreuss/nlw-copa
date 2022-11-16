//TESTE 
//document.querySelector('#app').innerHTML = "Susbstituir o conteúdo do HTML";

function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  //function que cria os cartões dentro do HTML
  delay = delay + 0.4;
  //console.log(delay);

  //toda vez que executar a função ela vai me dar um "return", vai jogar pra fora o conteudo
  return `<div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("02/12", "sexta",
    createGame("portugal", "16:00", "uruguai")) +
  createCard("28/11", "segunda",
    createGame("switzerland", "13:00", "brazil") +
    createGame("portugal", "16:00", "uruguai")) +
  createCard("28/11", "segunda",
    createGame("switzerland", "13:00", "brazil")) +
  createCard("28/11", "segunda",
    createGame("switzerland", "13:00", "brazil") +
    createGame("switzerland", "13:00", "brazil"))