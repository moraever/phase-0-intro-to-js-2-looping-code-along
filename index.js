
function writeCards(names, value) {
    let messageNames = []
    for (let i = 0; i < names.length; i++) {
        messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames
}

writeCards(["Guadalupe", "Ollie", "Aki"], "Surpise");

function countDown(n) {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}
