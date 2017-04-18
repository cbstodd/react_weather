let axios = require('axios');

// open api: b1b15e88fa797225412429c1c50c122a1
// my api: 437b7c9d5259eb873a2df29076a0f4df

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=437b7c9d5259eb873a2df29076a0f4df&units=imperial';

module.exports = {
    getTemp: function(location){
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            // Throws openweatherapp error msg
            throw new Error(res.data.message);
        });
    
    }
};