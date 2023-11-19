var hero = [87, 19];

var ranking = console.log(calculateRank(hero[0], hero[1]));

function calculateRank(win, losses) {
    let rank = hero[0] - hero[1];
    if (rank <= 10) hero[3] = "Ferro";
    else if (rank <= 11 && rank <= 20) hero[3] = "Bronze";
    else if (rank <= 21 && rank <= 50) hero[3] = "Prata";
    else if (rank <= 51 && rank <= 80) hero[3] = "Ouro";
    else if (rank <= 81 && rank <= 90) hero[3] = "Diamante";
    else if (rank <= 91 && rank <= 100) hero[3] = "Lendário";
    else if (rank >= 101) hero[3] = "Imortal";
    return `Rank de vitórias: ${rank}. O herói está no nível ${hero[3]}`
}