import React, {Component} from 'react';

class Cards extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        // console.log(this.props)
        return(
 
            <article className="card dogCard">
            <div>
        
                <img className="dogPhoto" src={this.props.dog.image}></img>
                <p>Name: {this.props.dog.name} </p>
                <p>Age: {this.props.dog.age} </p>
                <p>Size: {this.props.dog.size} lbs </p>
                <p>Breed: {this.props.dog.breed} </p>
                <p>Likes: {this.props.dog.likes} </p>
                <p>Dislikes: {this.props.dog.dislikes} </p>
                <button>Let's be friends!</button>

            </div>
            </article>

        )
    }
}

export default Cards;