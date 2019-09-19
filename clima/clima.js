const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&APPID=8f76f7fab4b79f2be8d0ecc8370fe790&lon=${lng}&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}