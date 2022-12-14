function createGame (player1, hour, player2) {
    return `
            <li>
                <img src="assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
                <strong>${hour}</strong>
                <img src="assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
            </li>
    `
}
let delay = -0.4
function createCard (date, day, games) {
    delay = delay + 0.4
    return `
    <div class="card1" style= "animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
    
    createCard("20/11", "DOMINGO",
        createGame("qatar", "13:00", "ecuador")) +
    createCard("21/11", "SEGUNDA",
        createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("states", "16:00", "wales")) +
    createCard("22/11", "TERÇA",
        createGame("argentina", "07:00", "arabia") +
        createGame("denmark", "10:00", "tunisia") +
        createGame("mexico", "13:00", "poland") +
        createGame("france", "16:00", "australia")) +
    createCard ("23/11", "QUARTA",
        createGame("marroco", "07:00", "croatia") +
        createGame("germany", "10:00", "japan") + 
        createGame("spain", "13:00", "costarica") +
        createGame("belgium", "16:00", "canada")) +  
    createCard("24/11", "QUINTA",
        createGame("switzerland", "07:00", "cameroon") +
        createGame("uruguay","10:00","korea") +
        createGame("portugal","13:00","ghana") +
        createGame("brazil","16:00","serbia")) +
    createCard("25/11", "SEXTA",
        createGame("wales", "07:00", "iran") +
        createGame("qatar", "10:00", "senegal") +
        createGame("netherlands", "13:00", "ecuador") +
        createGame("england", "16:00", "states")) +
    createCard("26/11", "SÁBADO",
        createGame("tunisia", "07:00", "australia") +
        createGame("poland", "10:00", "arabia") +
        createGame("france", "13:00", "denmark") +
        createGame("argentina", "16:00", "mexico")) +
    createCard("27/11", "DOMINGO",
        createGame("japan", "07:00", "costarica") +
        createGame("belgium", "10:00", "marroco") +
        createGame("croatia", "13:00", "canada") +
        createGame("spain", "16:00", "germany")) +
    createCard("28/11", "SEGUNDA",
        createGame("cameroon", "07:00", "serbia") +
        createGame("korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")) +
    createCard("29/11", "TERÇA", 
        createGame("ecuador", "12:00", "senegal") +
        createGame("netherlands", "12:00", "qatar") +
        createGame("wales", "16:00", "england") +
        createGame("iran", "16:00", "states")) +
    createCard("30/11", "QUARTA",
        createGame("australia", "12:00", "denmark") +
        createGame("tunisia", "12:00", "france") + 
        createGame("poland", "16:00", "argentina") +
        createGame("arabia", "16:00", "mexico")) +
    createCard("01/12", "QUINTA",
        createGame("croatia", "12:00", "belgium") +
        createGame("canada", "12:00", "marroco") +
        createGame("japan", "16:00", "spain") +
        createGame("costarica", "16:00", "germany")) + 
    createCard("02/12", "SEXTA",
        createGame("korea", "12:00", "portugal") +
        createGame("ghana", "12:00", "uruguay") +
        createGame("cameroon", "16:00", "brazil") +
        createGame("serbia", "16:00", "switzerland")) 

