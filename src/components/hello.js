import React from "react";
import axios from 'axios';
export class Hello extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
           movieData: ''
       }
    }
    componentWillMount() {
        axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=583d1dab')
        .then(resp =>{ 
            this.setState({movieData:resp.data})
        console.log(resp)})
        .catch(error => console.log(error))
    }
    render() {
        return <div>
    <div>{this.state.movieData.Title}</div>
        </div>
    }
    
}