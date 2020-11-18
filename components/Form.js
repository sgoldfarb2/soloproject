import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'none',
            age: 'none',
            breed: 'none',
            likes: 'none',
            dislikes: 'none'

        }

        // this.handleInputChange = this.handleInputChange.bind(this)
        // this.onClick = this.onClick.bind(this)
        // this.update = this.update.bind(this)
    
    }

    // handleInputChange(e) {
    //     let targetElement = e.target.name
    //     console.log(e.target.name)
    //     console.log(e.target.value)
    // // console.log(name.value)
    //     this.setState({
    //         [targetElement]: e.target.value
    //     })
    //     const newItem = {...this.state}
    //     // console.log(newItem)
    // }
    // onClick(e) {
    //     e.preventDefault();
    //     const newItem = {...this.state}
    //     // this.props.items.push(newItem)
    //     console.log(newItem)

    //     const url = '/newDog'
    //     const options = {
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(newItem),
    //         method: "POST"
    //     }
    //     fetch(url, options)
    //     .then(data => {return data.json()})
    //     .then(res=>{
    //         this.props.items.push(newItem)
    //     })
    //     .catch(error=>console.log(error))

    // }

    render() {
        return (
            <div className="form">
                <h3>Join the pack!</h3>
                <form>

                    <br></br>
                    <label>Name: 
                    <br></br>
                    <input
                     type="text" 
                     name="name"
                     id="name"
                    //  value={this.props.name} 
                     onChange={(e) => this.props.inputChange(e)}
                    //  ref={input => this.name = input}
                     ></input>
                    </label>
                    <br></br>
                    <label>Age: 
                    <br></br>
                    <input 
                    type="text" 
                    name="age" 
                    id="age"
                    // value={this.state.age} 
                    onChange={(e) => this.props.inputChange(e)}
                    // ref={input => this.age = input}
                    ></input>
                    </label>
                    <br></br>
                    <label>Size: 
                    <br></br>
                    <input
                     type="text" 
                     name="size" 
                     id="size"
                    //  value={this.state.name} 
                    onChange={(e) => this.props.inputChange(e)}
                    //  value={this.props.name}
                    //  ref={input => this.name = input}
                     ></input>
                    </label>
                    <br></br>
                    <label>Breed: 
                    <br></br>
                    <input 
                    type="text" 
                    name="breed" 
                    // value={this.state.breed} 
                    id="breed"
                    onChange={(e) => this.props.inputChange(e)}
                    // ref={input => this.breed = input}
                    ></input>
                    </label>
                    <br></br>
                    <label>Likes: 
                    <br></br>
                    <input 
                    type="text" 
                    name="likes" 
                    id="likes"
                    // value={this.state.likes} 
                    onChange={(e) => this.props.inputChange(e)}
                    // ref={input => this.likes = input}
                    id="likes"
                    ></input>
                    </label>
                    <br></br>
                    <label>Dislikes: 
                    <br></br>
                    <input 
                    type="text" 
                    name="dislikes" 
                    id="dislikes"
                    // value={this.state.dislikes} 
                    onChange={(e) => this.props.inputChange(e)}
                    // ref={input => this.dislikes = input}
                    ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <button id="submitPhoto">Upload A Photo</button>
                    <br></br>
                    <br></br>
                    <button 
                    onClick={this.props.onClick}
                    id="submitButton" 
                    type="submit"
                    > Submit</button>
                </form>
            </div>
        )
    }
}

export default Form

// see how state is changing
// call your post request in the same call
// update state 
