
function countBlackJackPoints(cards) {
    let points = 0;
    let ess = false;
    if (!cards) {points = null}
    else {
        for (let card of cards) {
            let suitAndRank = card.split(' ');
            if (suitAndRank[1] == 'Dame') suitAndRank[1] = 10
            if (suitAndRank[1] == 'Konge') suitAndRank[1] = 10
            if (suitAndRank[1] == 'Knekt') suitAndRank[1] = 10
            if (suitAndRank[1] == 'Ess' && points <= 10) {suitAndRank[1] = 11; ess = true}
            if (suitAndRank[1] == 'Ess' && points >= 10) {suitAndRank[1] = 1; ess = true}
            let rank = suitAndRank[1];
            points += parseInt(rank);
        }
        if (points > 21 && ess == true) points -= 10
        return points;
    }
}