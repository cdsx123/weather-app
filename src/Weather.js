import React from 'react';


function Weather(props) {
    let temp = fahrenheit(props.info.temp)
    let tempFeel = fahrenheit(props.info.tempFeel)
    let maxTemp = fahrenheit(props.info.maxTemp)
    let minTemp = fahrenheit(props.info.minTemp)

    function fahrenheit (temp) {
        return Math.round((temp - 273.15)*9/5 +32 )
    }
    function celsius (temp) {
        return Math.round(temp-273.15)
    }
  
    
    return (
      <div id='mainInfo'>
        <div id='place'>
            <h1>{props.info.city}, {props.info.country}</h1>
        </div>

        <div id='weather'>
            <h2>{props.info.title}</h2>
            <img src='' alt='pic'/>
            <h3>{props.info.description}</h3>
        </div>

        <div id='temperatures'>
            <h1>{temp + '\u00B0'}</h1>
            <h3>Feels Like: {tempFeel + '\u00B0'}</h3>
            <h3>{minTemp + '\u00B0'}/{maxTemp + '\u00B0'}</h3>
        </div>

        <div id='extra'>
            <h4>{props.info.pressure} hPa</h4>
            <h4>{props.info.humidity}%</h4>
        </div>
      </div>
    );
   
}

export default Weather;
