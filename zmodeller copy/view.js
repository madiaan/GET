errormsg = ''
hasADHD = false;
Project();
function Project() {
    document.getElementById('main').innerHTML = /*HTML*/ `
        <h1>Velkommen</h1>
        <h3>Logg inn</h3>
        <div>Brukernavn:</div>
        <input onchange="inputUsername = this.value"/>
        <div>Passord:</div>
        <input onchange="inputPassword = this.value"/><br/><br/>
        <button onclick="checkCredentials()">Logg inn</button><br/>
        <div id="korrekt"></div>
    `
};
function checkLogin() {
    if (login == true) {
        document.getElementById('main').innerHTML = /*HTML*/`
        <h2>du er logget inn som: ${inputUsername}</h2>
        <button onclick="skjema()">sjekk skjema</button>
        `
    }
    else if (login == false) {
        document.getElementById('korrekt').innerHTML = `<div style="color: red;">feil innlogging</div>`
    }
};
function skjema() {
    document.getElementById('main').innerHTML = /*HTML*/`
    <div id="tabell"></div>`;
    displaySkjema();
};
function displaySkjema() {
    document.getElementById('tabell').innerHTML = '';
    for (let x = 0; x < model2.question.length; x++) {
        document.getElementById('tabell').innerHTML +=
            `<div style="display: flex;">
                <span class="questions">` 
                    + model2.question[x].q + 
                `</span> 
                <span class="qanswer" id="q`+x+`"></span>
            </div>`;
        for (let i = 0; i < model2.question[x].a.length; i++) {
            let showX = model2.question[x].a[i] == false ? '' : model2.question[x].a[i] == true ? 'x' : '';
            document.getElementById('q'+x).innerHTML +=
            `<span onclick="selectedAnswer(`+x+`, `+i+`);" class="answers" id="q`+x+`a`+i+`">`+showX+`</span>`;
        };
    };
    document.getElementById('tabell').innerHTML += `<br/><button onclick="results()">Se resultat</button>`;
};
function results() {
    value = 0;
    calculateADHD();
    if (value == 4 || value >= 4) {
        document.getElementById('tabell').innerHTML += `du har ADHD`;
    }
    else {
        document.getElementById('tabell').innerHTML += `du har ikke ADHD`;
    };
    for (let x = 0; x < model2.question.length; x++) {
        document.getElementById('q'+x+'a3').style.backgroundColor += 'lightgray';
        document.getElementById('q'+x+'a4').style.backgroundColor += 'lightgray';
    };
    const graySquare = ['q0a2', 'q1a2', 'q2a2', 'q8a2', 'q11a2', 'q15a2', 'q17a2'];

for (const grays of graySquare) {
    const element = document.getElementById(grays);
    if (element) {
        element.style.backgroundColor += 'lightgray';
    }
}
};