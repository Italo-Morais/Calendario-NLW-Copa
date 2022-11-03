function createGame (player1, hour, player2) {
    return `
            <li>
                <img src="assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
                <strong>${hour}</strong>
                <img src="assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
            </li>
    `
}

function createCard (date, day, games) {
    return `
    <div class="card1">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector("#app").innerHTML = `
<header>
    <img src="assets/logo.svg" alt="Logo da NLW">
</header>

<main id="cards">
    ${createCard("24/11", "QUINTA",
        createGame("switzerland", "07:00", "cameroon") +
        createGame("uruguay","10:00","korea") +
        createGame("portugal","13:00","ghana") +
        createGame("brazil","16:00","serbia") 
        )}
    ${createCard("28/11", "SEGUNDA",
        createGame("cameroon", "07:00", "serbia") +
        createGame("korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")
        )}
    ${createCard("02/12", "SEXTA",
        createGame("korea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay") +
        createGame("cameroon", "16:00", "brazil") +
        createGame("serbia", "16:00", "switzerland")
        )}
</main>
`
