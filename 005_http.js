http = require('http');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const config = require('./config.js');

const argv = yargs(hideBin(process.argv))
	.option('city', {
		alias: 'c',
		type: 'string',
		description: 'City'
	})
	.parse();

if (!argv.city) {
	console.log('Укажите город');
	return;
}

const url = new URL(config.env.API_URL);
url.searchParams.set('q', argv.city);
url.searchParams.set('key', config.env.API_KEY);

http.get(url, (res) => {
	const { statusCode } = res
	if (statusCode !== 200) {
		console.log(`statusCode: ${statusCode}`)
		return
	}

	res.setEncoding('utf8')
	let rowData = ''
	res.on('data', (chunk) => rowData += chunk)
	res.on('end', () => {
		let parseData = JSON.parse(rowData)
		console.log(`Информация актуальна на  ${parseData.current.last_updated}`);
		console.log(`Температура ${parseData.current.temp_c} C`);
		console.log(`Ощущается как ${parseData.current.feelslike_c} C`);
		console.log(`Облачность ${parseData.current.cloud}`);
		console.log(`Скорость ветра ${parseData.current.wind_kph} км/ч`);
		console.log(`Давление ${parseData.current.pressure_mb} мм ртс`);
		console.log(`Влажность ${parseData.current.humidity} %`);


	})
}).on('error', (err) => {
	console.error(err)
})