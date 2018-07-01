const names = ["Dileep", "Aman", "Arjun"]
const origin = ["Mumbai", "Delhi", "Kerala"]
const destination = ["Lucknow", "Punjab", "Cochin"]

const shuffleArray = () => {
    let randomI;
    for(let i=0;i<4; i++){
        randomI = Math.floor(Math.random() * (i + 1));
    }
    return {
        name : names[randomI],
        origin: origin[randomI] ,
        destination: destination[randomI]
    }
}

module.exports = {
    shuffleArray
}