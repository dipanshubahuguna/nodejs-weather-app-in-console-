const request = require('request')

const forecast = (lat,lon,callback) =>{

    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=7696d3a937dd1fa7adcf96cee4016f7b&lat=' + lat+ '&lon='+ lon +'&units=metric'
    request({url : url, json : true} , (error,response) =>{
            if(error){
                callback('unable to connect!',undefined)
            }else if(response.body.cod === "400"){
                callback("No such location",undefined)
            }else{
                console.log("it's currently "+ response.body.main.temp +" degree celcius in "+ response.body.name +" " + response.body.sys.country +" ")
            }
    })

}    

module.exports = forecast


