let goodSide = {
    Hobbits: 1,
    Men: 2,
    Elves: 3,
    Dwarves: 3,
    Eagles: 4,
    Wizards: 10
}
let badSide = {
    Orcs: 1,
    Men: 2,
    Wargs: 2,
    Goblins: 2,
    UrukHai: 3,
    Trolls: 5,
    Wizards: 10
}
// REVIEW can we use a dictionary and itterate through the values?
function mybattle(H_M_E_D_E_W) {
    let goodArr = H_M_E_D_E_W.split(' ').map(Number)

    let totalHero = 0
    for (let i = 0; i < goodArr.length; i++) {
        const currentHero = goodArr[i];;
        console.log(totalHero);
        console.log(currentHero);
    }

}









function hisBattle(good, bad) {

    let goodScore = 0
    let badScore = 0


    let goodArr = good.split(' ').map(v => Number)
    let badArr = bad.split(' ').map(v => Number)

    let goodPoints = [1, 2, 3, 3, 4, 10]
    goodArr.forEach((u, i) => goodScore += u * goodPoints[i])

    let badPoints = [1, 2, 2, 2, 3, 5, 10]
    badArr.forEach((u, i) => badScore += u * badPoints[i])


    if (goodScore == badScore) {
        return "No winner"
    }
    if (goodScore > badScore) {
        return "the good guys won"
    }
    return "evil wins"
}






