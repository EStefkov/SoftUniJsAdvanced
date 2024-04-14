
function solve(face, suit){
    const validFaces=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const faceToString ={
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    if(validFaces.includes(face) == false){
        throw new Error('InalidFace')
    }else if(Object.keys(faceToString).includes(suit)== false) {
        throw new Error('InalidSuit')
    }
   // console.log(Object.values(faceToString))
    return {
        face,
        suit,
        toString(){
            return `${face}${faceToString[suit]}`
        }
    }
}
const myCard = solve('A','D')
console.log(myCard.toString());

console.log(solve('A', 'S').toString())

console.log(solve('10', 'H').toString())

console.log(solve('5', 'C').toString())