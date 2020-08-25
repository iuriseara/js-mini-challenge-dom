/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"


/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)
const playerClass = document.querySelector('.player-container')
// console.log(playerClass)

PLAYERS.forEach(function(player){
    playerClass.innerHTML += `
    <div class="player" data-number="${player.number}">
      <h3>
        ${player.name} (<em>${player.nickname}</em>)
      </h3>
     <img src="${player.photo}" alt="${player.name}">
    </div> `;
});




/***** Deliverable 4 *****/

document.querySelector(`[data-number="7"]`).remove()
