#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const checkIntervalType = (argv) => {
    if (!(argv.day || argv.month || argv.year)) {
        console.log('Set interval type');
        return false;
    }
    if ((argv.day ^ argv.month ^ argv.year) && !(argv.day && argv.month && argv.year)) {
        return true;
    }

}
const argv = yargs(hideBin(process.argv))
    .option(
        'day', {
        alias: 'd',
        type: 'boolean',
        description: 'Days'
    }
    )
    .option(
        'month', {
        alias: 'm',
        type: 'boolean',
        description: 'Month'
    }
    )
    .option(
        'year', {
        alias: 'y',
        type: 'boolean',
        description: 'Year'
    }
    )
    .command('add [amount]', 'add interval to current date',
        (yargs) => {
            return yargs
                .positional('amount', {
                    describe: 'amount of added intervals',
                    default: 1
                })
        },
        (argv) => {
            let moment = new Date();
            if (checkIntervalType(argv)) {
                switch (true) {
                    case argv.day: moment.setDate(moment.getDate() + argv.amount); break;
                    case argv.month: moment.setMonth(moment.getMonth() + argv.amount); break;
                    case argv.year: moment.setFullYear(moment.getFullYear() + argv.amount); break;

                }
                console.log(moment);
            }
            return;
        })
    .command('sub [amount]', 'Subtract interval from current date',
        (yargs) => {
            return yargs
                .positional('amount', {
                    describe: 'amount of subtracted intervals',
                    default: 1
                })
        },
        (argv) => {
            let moment = new Date();
            if (checkIntervalType(argv)) {
                switch (true) {
                    case argv.day: moment.setDate(moment.getDate() - argv.amount); break;
                    case argv.month: moment.setMonth(moment.getMonth() - argv.amount); break;
                    case argv.year: moment.setFullYear(moment.getFullYear() - argv.amount); break;
                }
                console.log(moment);
                
            }
            return;
        })
        .command('current', 'Current date',
        (yargs) => {
            return yargs
        },
        (argv) => {
            if (!(argv.day || argv.month || argv.year)) {console.log(new Date()); return;}
            if (checkIntervalType(argv)) {
                switch (true) {
                    case argv.day: console.log(new Date().getDate()); break;
                    case argv.month: console.log(new Date().getMonth()); break;
                    case argv.year: console.log(new Date().getFullYear()); break;
                }
                return;
            }
        })
    .argv;



//console.log(argv);