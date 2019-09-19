const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// clima.getClima(40.419998, -3.700000).then(console.log).catch(console.log)

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// console.log(argv.direccion);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const climalugar = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${climalugar}`
    } catch (err) {
        return 'No se pudo determinar el clima de ' + direccion + ' - ' + err;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)