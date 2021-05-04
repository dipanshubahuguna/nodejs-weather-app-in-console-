const geoUrl = require('./utils/geoUrl')
const forecast = require('./utils/forecast')

const location = process.argv[2]


geoUrl(location, (error,res)=>{

    if(!location){
        return console.log("No location provided!!")
    }

    if(error){
         return console.log("something went wrong !!")
    }
        forecast(res.latitude,res.longitude , (error,res)=>{

            if(error){
                return console.log("Oops something went wrong !!")
            }
            console.log('Data :' , res )
        })
})



