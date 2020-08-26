import React from 'react';
import Weather from './Weather'

class Search extends React.Component {
    constructor(){
        super()
        this.state={
            input: 'London',
            city: '',
            country: '',
            temp: '',
            minTemp: '',
            maxTemp: '',
            tempFeel: '',
            title: '',
            description: '',
            pressure: '',
            humidity: '',
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({[name]: value})
    }



    handleSubmit(event) {
        if (event){
        event.preventDefault()
        }

        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.input + '&appid=21bbf8d4b0e426fe2fd96a82afa74b3f')
        .then(response => response.json())
        .then(response => {
            this.setState({ 
                city: response.name,
                country: response.sys.country,
                temp: response.main.temp,
                minTemp: response.main.temp_min,
                maxTemp: response.main.temp_max,
                tempFeel: response.main.feels_like,
                title: response.weather[0].main,
                description: response.weather[0].description,
                pressure: response.main.pressure,
                humidity: response.main.humidity,
                input: '',
            });
            console.log(response)
        })

    }

    componentDidMount() {
        this.handleSubmit()
    }
  
  render(){ 
    return (
        <React.Fragment>
            <h1 id='title'>Weather App</h1>
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text' 
                name='input' 
                placeholder='City, Country' 
                onChange={this.handleChange} 
                value={this.state.input}
                />
                <button>Submit</button>
            </form>
            <Weather info = {this.state}/>
      </React.Fragment>
    );
  }  
}

export default Search
