const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const myNumber = Math.floor(1 + Math.random() * 100 );;
//console.log(myNumber);
const questionCallBack = (answer) => {
    if (isNaN(answer)){
        rl.question(`Я загадал число, другие символы тебе не нужны\n`, questionCallBack)
        return;
    }
    if (answer == myNumber) {
        console.log(`Верно, я загадал ${answer}, ты победил`);
        rl.close();
        return;
    }
    if (answer > myNumber) {

        rl.question(`Нет, мое число меньше\n`, questionCallBack)
        return;
    }
    if (answer < myNumber) {

        rl.question(`Нет, мое число больше\n`, questionCallBack)
        return;
    }
}
rl.question('Я загадал число от 1 до 100. Попробуй угадать?\n', questionCallBack);
return;




