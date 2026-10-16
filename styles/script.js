const password = document.getElementById('pass');
const revButton = document.getElementById('rev-btn');
const copyButton = document.getElementById('copy-btn');
const alret = document.getElementById('alret');
const genNewPass = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const chars = uppercase + lowercase + numbers;
    let result = [];
        for(let i = 0; i < 8; i++) {
            // randomly push chars and nums to result 
            const array = new Uint32Array(1);
            const index = crypto.getRandomValues(array)[0] % chars.length; 
            result.push(chars[index]);
            
        } 
        return result.join('');
};
// updates the new password
const changeText = () => {
   password.textContent = genNewPass(); 
};


// combines more handler functions with one event
revButton.addEventListener('click', changeText)
changeText();