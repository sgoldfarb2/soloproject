import React, {Component} from 'react';
import Cards from './components/Cards.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
import style from './styles.css'
import Form from './components/Form.js'
import axios from 'axios';



class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            name: '',
            age: '',
            breed: '',
            size: '',
            likes: '',
            dislikes: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        fetch('/dogs')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result.items
            })
        }, (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        }
      )
    }


    handleInputChange(e) {
        console.log(e)
        let targetElement = e.target.name
        console.log(e.target.name)
        console.log(e.target.value)
    // console.log(name.value)
        this.setState({
            [targetElement]: e.target.value
        })
        const newItem = {...this.state}
        // console.log(newItem)
    }
    onClick(e) {
        e.preventDefault();
        axios
        .post('/newDog', this.state)
        .then((res) => {this.setState({isLoaded: true, items: res.data.items})
        console.log(res.data)
    })
        // const newItem = {...this.state}
        // // this.props.items.push(newItem)
        // console.log(newItem)

        // const url = '/newDog'
        // const options = {
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(newItem),
        //     method: "POST"
        // }
        // fetch(url, options)
        // .then(data => {return data.json()})
        // .then(res=>{
        //     this.props.items.push(newItem)
        // })
        // .catch(error=>console.log(error))

    }


    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
        let arrayofDogs = []
        for(let i = 0; i < items.length; i++) {
            arrayofDogs.push(<Cards dog={this.state.items[i]} key={`dogCards${i}`}/>)
        }
            return (
                <div>
                <h1>DoggyBFF</h1>
                <h3>Find A New Best Friend For Man's Best Friend</h3>
                {arrayofDogs}
                <Form 
                items={this.state.items} 
                onClick={this.onClick} 
                inputChange={this.handleInputChange}
                name={this.state.name}
                age={this.state.age}
                breed={this.state.breed}
                likes={this.state.likes}
                dislikes={this.state.dislikes}
                size={this.state.size}
                />
                </div>
            )
        }
    

    }
}

export default App;