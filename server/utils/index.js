export const generateRandomString = (length = 50) => {
    const result = []
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
    }
    return result.join('')
}

export const waitFor = (miliSec) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, miliSec)
    })
}

export const generateBoolean = () => {
    return Math.random() < 0.5
}

export const generateRandomNumber = (min, max, isFloor, forceTwoDigits) => {
    let random = Math.random() * (max - min + 1)
    random = isFloor ? Math.floor(random) + min : Number(random.toFixed(8))
    if (random < 10 && isFloor && forceTwoDigits) {
        random = '0' + random
    }
    return random
}

export const Lizet = () => {
    console.log('---------- EEEEEEEEEEEEEE ----------')
}

export const calculateHomeCommission = (amount = 0) => {
    const homeProfit = (Number(amount) / 100) * 55 // THE COMMISSION
    const userProfit = amount - homeProfit
    return { homeProfit, userProfit  }
}
