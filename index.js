function getLengthPassword(){
    const lengthValue = document.getElementById("tamanho").value;

    return lengthValue;
}


function generateChars() {
    const upperCase = document.getElementById('upperCase').checked ? 'ABCDEFGHIJLMNOPQRSTUVWXYZ' : '';
    const lowerCase = document.getElementById('lowerCase').checked ? 'abcdefghijklmnopqrstuvwxyz' : '';
    const numbers = document.getElementById('numbers').checked ? '0123456789' : '';
    const symbols = document.getElementById('symbols').checked ? '!@#$%^&*()+?><:{}[]"`´' : '';

    return `${numbers}${lowerCase}${upperCase}${symbols}`;
}


function generatePassword() {
    let newPassword = document.getElementById("senha");
    let password = "";

    for (let i = 0; i <  getLengthPassword(); i++) {
        let randomNumber = Math.floor(Math.random() * generateChars().length);
        password += generateChars().substring(randomNumber, randomNumber + 1);
    }

    newPassword.innerHTML = password;
}

generatePassword();