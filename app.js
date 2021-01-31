const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=999cae2db3f51c3e5b99432b838a97ed&query=30.4702905,-97.6879616'
const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Ausin.json?access_token=pk.eyJ1Ijoic2dhbmd1bHkyNCIsImEiOiJja2trOWZlOXUwOHIxMnVvY3gzZXJ2Yzk1In0.sLg1P0kmA7vs-2UcQl6j8A&limit=1'

request({url: url, json: true}, (error, response)=>{
    if(error)
    {
        console.log('Unable to provide data due to network issue')
    }
    else if (response.body.error)
    {
        console.log('Unable to find a location')
    }    
    else
    console.log('It is '+response.body.current.weather_descriptions[0] +' outside with '+ response.body.current.temperature+' degree C and feels like ' + response.body.current.feelslike+ ' C with')
})

request({url: geocodeURL, json: true}, (error, response)=>{
    const latitude = (response.body.features[0].center[1])
    const longitude = (response.body.features[0].center[0])
    console.log(latitude + ' '+ longitude)
})