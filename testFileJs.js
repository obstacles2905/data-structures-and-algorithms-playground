const axios = require('axios');

// require('./callMock');

function cityWeather(city) {
    if (!city) {
        throw new Error('string is empty');
    }
    if (typeof city !== 'string') {
        throw new Error('not a string')
    }

    return new Promise(async(resolve, reject) => {
        const response = await axios.get(`https://example.com/data/2.5/weather?q=${city}`);
        if (err) {
            console.log(err);
        }
        resolve({foo: 'bar'});
    });
}

cityWeather("dnipro");