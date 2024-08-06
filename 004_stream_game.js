#!/usr/bin/env node
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const checkLog = (argv) => {
    if (!(argv.logfile)) {
        console.log('Укажите путь к файлу логирования');
        return false;
    }
    else { return true; }

}
const logLine = (logText) => {
    return new Date() + '\t' + logText + '\n';
}
const fs = require('fs');
const { string } = require('yargs');

const argv = yargs(hideBin(process.argv))
    .option(
        'logfile', {
        alias: 'l',
        type: 'string',
        description: 'logFile name'
    }

    )
    .command('Start', 'Start game',
        (yargs) => {
            return yargs
        },
        (argv) => {
            if (!checkLog(argv)) return

            const writerSrt = fs.createWriteStream(argv.l + '.log', {flags: 'a'})


            writerSrt.on('error', () => {
                console.error('fs error')
            })
            // writerSrt.write(logLine('Игра началась'), 'UTF8')
            console.log('Игра началась')
            console.log(logLine('Игра началась'))
            writerSrt.write(logLine('Игра началась'), 'UTF8');


            const rl = readline.createInterface({ input, output });
            const coinValue = Math.floor(1 + Math.random() * 100) > 50 ? 1 : 2;
            //console.log(myNumber);
            const questionCallBack = (answer) => {
                if (answer == 1 || answer == 2) {
                    if (answer == coinValue) {
                        console.log(logLine('Угадал'));
                        writerSrt.write(logLine('Угадал'), 'UTF8');

                    }
                    else {

                        console.log(logLine('Не угадал'));
                        writerSrt.write(logLine('Не угадал'), 'UTF8')


                    }
                    writerSrt.write(logLine('Игра завершилась'), 'UTF8');
                    writerSrt.end()

                    rl.close();
                    return;
                }
                else {
                    rl.question(`1 - Орел, 2 - Решка. Других вариантов нет.\n`, questionCallBack)
                    writerSrt.write(logLine('Некорректный ввод:' + answer), 'UTF8');
                    return;
                }




            }
            writerSrt.write(logLine('Бросаем монетку:' + coinValue), 'UTF8');
            rl.question('Бросаем монетку... 1 - Орел, 2 - Решка. Что выберешь?\n', questionCallBack);

            return;
        })
    .argv;
