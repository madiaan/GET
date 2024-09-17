inputUsername = '';
inputPassword = '';
login = true;

function checkCredentials() {
    for (let x = 0; x < model2.registeredUsers.length; x++) {
        const users = model2.registeredUsers[x];
        if (inputUsername == users.user && inputPassword == users.password) {
        login = true;
        }
        checkLogin();
    }
}

function selectedAnswer(qIndex, aIndex) {
    for (let x = 0; x < model2.question[qIndex].a.length; x++) {
        model2.question[qIndex].a[x] = false;
    };
    model2.question[qIndex].a[aIndex] = !model2.question[qIndex].a[aIndex];
    displaySkjema();
};
function calculateADHD() {
    for (let x = 0; x < 3; x++) {
        let questions = model2.question[x].a;
        if (questions[2] == true || questions[3] == true || questions[4] == true) {
            value += 1
        };
    };
    for (let x = 3; x < 6; x++) {
        let questions = model2.question[x].a;
        if (questions[3] == true || questions[4] == true) {
            value += 1
        };
    };
};