function generateRandomNumber(list) {
    const random = Math.floor(Math.random(1) * list)
    
    return random
}

export {
    generateRandomNumber
}